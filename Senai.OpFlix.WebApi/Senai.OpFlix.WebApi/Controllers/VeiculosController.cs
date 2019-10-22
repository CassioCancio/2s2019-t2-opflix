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
    [Authorize(Roles = "ADMINISTRADOR")]
    public class VeiculosController : ControllerBase
    {
        private IVeiculoRepository VeiculoRepository { get; set; }

        public VeiculosController()
        {
            VeiculoRepository = new VeiculoRepository();
        }

        /// <summary>
        /// Busca todos os veículos
        /// </summary>
        /// <returns>Retorna uma lista de veículos/plataformas</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(VeiculoRepository.Listar());
        }

        /// <summary>
        /// Cadastra um veículo
        /// </summary>
        /// <param name="veiculo"></param>
        /// <returns>Retorna uma verificação</returns>
        [HttpPost]
        public IActionResult Cadastrar(Veiculos veiculo)
        {
            try
            {
                VeiculoRepository.Cadastrar(veiculo);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }

        /// <summary>
        /// Altera o nome de um veículo
        /// </summary>
        /// <param name="veiculo"></param>
        /// <param name="id"></param>
        /// <returns>Retorna uma verificação</returns>
        [HttpPut("{id}")]
        public IActionResult Alterar(Veiculos veiculo, int id)
        {
            veiculo.IdVeiculo = id;

            try
            {
                Veiculos VeiculoBuscado = VeiculoRepository.BuscarPorId(veiculo.IdVeiculo);
                if (VeiculoBuscado == null)
                    return NotFound();

                VeiculoRepository.Alterar(veiculo);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }

        /// <summary>
        /// Apaga um veículo
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Retorna uma verificação</returns>
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            VeiculoRepository.Deletar(id);
            return Ok();
        }
    }
}