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
    public class CategoriasController : ControllerBase
    {
        private ICategoriaRepository CategoriaRepository { get; set; }

        public CategoriasController()
        {
            CategoriaRepository = new CategoriaRepository();
        }

        /// <summary>
        /// Busca todas as categorias
        /// </summary>
        /// <returns>Retorna uma lista de categorias</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(CategoriaRepository.Listar());
        }

        /// <summary>
        /// Cadastra uma categoria
        /// </summary>
        /// <param name="categoria"></param>
        /// <returns>Retorna uma verificação</returns>
        [HttpPost]
        public IActionResult Cadastrar(Categorias categoria)
        {
            try
            {
                CategoriaRepository.Cadastrar(categoria);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }

        /// <summary>
        /// Altera o nome de uma categoria
        /// </summary>
        /// <param name="categoria"></param>
        /// <param name="id"></param>
        /// <returns>Retorna uma verificação</returns>
        [HttpPut("{id}")]
        public IActionResult Alterar(Categorias categoria, int id)
        {
            try
            {
                Categorias CategoriaBuscada = CategoriaRepository.BuscarPorId(id);
                if (CategoriaBuscada == null)
                    return NotFound();

                categoria.IdCategoria = id;
                CategoriaRepository.Alterar(categoria);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }

        /// <summary>
        /// Apaga uma categoria
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Retorna uma verificação</returns>
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
            CategoriaRepository.Deletar(id);
            return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }
    }
}