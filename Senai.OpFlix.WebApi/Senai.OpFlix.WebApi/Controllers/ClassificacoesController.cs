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
    public class ClassificacoesController : ControllerBase
    {
        private IClassificacaoRepository ClassificacaoRepository { get; set; }

        public ClassificacoesController()
        {
            ClassificacaoRepository = new ClassificacaoRepository();
        }

        /// <summary>
        /// Busca todas as mídias
        /// </summary>
        /// <returns>Retorna uma lista de mídias</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(ClassificacaoRepository.Listar());
        }
    }
}