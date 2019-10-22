using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
    public class UsuariosController : ControllerBase
    {
        private IUsuarioRepository UsuarioRepository { get; set; }

        public UsuariosController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        /// Busca todos os usuários
        /// </summary>
        /// <returns>Retorna uma lista de Usuarios sem senha</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(UsuarioRepository.Listar());
        }

        /// <summary>
        /// Cadastra um usuário
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns>Retorna uma verificação</returns>
        [HttpPost]
        public IActionResult Cadastrar(Usuarios usuario)
        {
            string PermissaoUsuario = User.FindFirst(ClaimTypes.Role)?.Value;

            if(PermissaoUsuario == null || PermissaoUsuario == "CLIENTE")
            {
                usuario.TipoUsuario = "CLIENTE";
            }

            if(usuario.TipoUsuario == null)
            {
                usuario.TipoUsuario = "CLIENTE";
            }

            if(usuario.TipoUsuario != "CLIENTE" && usuario.TipoUsuario != "ADMINISTRADOR")
            {
                usuario.TipoUsuario = "CLIENTE";
            }

            try
            {
                UsuarioRepository.Cadastrar(usuario);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Ih, deu erro." + ex.Message });
            }
        }

        /// <summary>
        /// Apaga um usuário
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Retorna uma verificação</returns>
        [Authorize(Roles = "ADMINISTRADOR")]
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            UsuarioRepository.Deletar(id);
            return Ok();
        }
    }
}