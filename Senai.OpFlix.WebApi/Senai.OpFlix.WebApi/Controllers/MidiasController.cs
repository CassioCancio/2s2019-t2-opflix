using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using Senai.OpFlix.WebApi.Repositories;

namespace Senai.OpFlix.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    [Authorize]
    public class MidiasController : ControllerBase
    {
        private IMidiaRepository MidiaRepository { get; set; }

        public MidiasController()
        {
            MidiaRepository = new MidiaRepository();
        }

        /// <summary>
        /// Busca todas as mídias
        /// </summary>
        /// <returns>Retorna uma lista de mídias</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(MidiaRepository.Listar());
        }

        [HttpGet("filtrarCategoria")]
        public IActionResult ListarTodos()
        {
            return Ok(MidiaRepository.Listar());
        }

        [HttpGet("filtrarCategoria/{id}")]
        public IActionResult FiltrarCategoria(int id)
        {
            return Ok(MidiaRepository.FiltrarCategoria(id));
        }

        /// <summary>
        /// Busca todas as mídias de um determinado mês
        /// </summary>
        /// <param name="mes"></param>
        /// <returns>Retorna uma lista de mídias</returns>
        [HttpGet("BuscarPorMes/{mes}")]
        public IActionResult BuscarPorMes(int mes)
        {
            return Ok(MidiaRepository.BuscarPorMes(mes));
        }

        [HttpGet("BuscarPorMes")]
        public IActionResult Todos()
        {
            return Ok(MidiaRepository.Listar());
        }

        /// <summary>
        /// Busca todas as mídias de uma determinada plataforma/veículo
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Retorna uma lista de mídias</returns>
        [HttpGet("BuscarPorPlataforma/{id}")]
        public IActionResult BuscarPorPlataforma(int id)
        {
            return Ok(MidiaRepository.BuscarPorPlataforma(id));
        }

        /// <summary>
        /// Cadastra uma mídia
        /// </summary>
        /// <param name="midia"></param>
        /// <returns>Retorna uma verificação</returns>
        [Authorize(Roles = "ADMINISTRADOR")]
        [HttpPost]
        public IActionResult Cadastrar(Midias midia)
        {
            try
            {
                MidiaRepository.Cadastrar(midia);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }

        /// <summary>
        /// Altera o nome de uma mídia
        /// </summary>
        /// <param name="midia"></param>
        /// <param name="id"></param>
        /// <returns>Retorna uma verificação</returns>
        [Authorize(Roles = "ADMINISTRADOR")]
        [HttpPut("{id}")]
        public IActionResult Alterar(Midias midia, int id)
        {
            midia.IdMidia = id;

            try
            {
                Midias MidiaBuscada = MidiaRepository.BuscarPorId(midia.IdMidia);
                if (MidiaBuscada == null)
                    return NotFound();

                MidiaRepository.Alterar(midia);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }

        /// <summary>
        /// Apaga uma mídia
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Retorna uma verificação</returns>
        [Authorize(Roles = "ADMINISTRADOR")]
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            MidiaRepository.Deletar(id);
            return Ok();
        }
    }
}