using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
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
    public class FavoritosController : ControllerBase
    {
        private IFavoritoRepository FavoritoRepository { get; set; }

        public FavoritosController()
        {
            FavoritoRepository = new FavoritoRepository();
        }

        /// <summary>
        /// Busca todos os favoritos do usuário
        /// </summary>
        /// <returns>Retorna uma lista de favoritos</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            int IdUsuario = int.Parse(User.FindFirst(JwtRegisteredClaimNames.Jti)?.Value);
            return Ok(FavoritoRepository.Listar(IdUsuario));
        }

        /// <summary>
        /// Cadastra um favorito
        /// </summary>
        /// <param name="favorito"></param>
        /// <returns>Retorna uma verificação</returns>
        [HttpPost]
        public IActionResult Cadastrar(Favoritos favorito)
        {
            int IdUsuario = int.Parse(User.FindFirst(JwtRegisteredClaimNames.Jti)?.Value);
            favorito.IdUsuario = IdUsuario;

            try
            {
                FavoritoRepository.Cadastrar(favorito);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }

        /// <summary>
        /// Apaga um favorito
        /// </summary>
        /// <param name="favorito"></param>
        /// <returns>Retorna uma verificação</returns>
        [HttpDelete]
        public IActionResult Deletar(Favoritos favorito)
        {
            try
            {
            int IdUsuario = int.Parse(User.FindFirst(JwtRegisteredClaimNames.Jti)?.Value);
            FavoritoRepository.Deletar(favorito, IdUsuario);
            return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }
    }
}