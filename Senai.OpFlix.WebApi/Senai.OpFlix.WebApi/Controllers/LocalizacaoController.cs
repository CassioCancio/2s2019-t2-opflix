using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.OpFlix.WebApi.Interfaces;
using Senai.OpFlix.WebApi.Repositories;

namespace Senai.OpFlix.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class LocalizacaoController : ControllerBase {

        private ILocalizacaoRepository LocalizacaoRepository { get; set; }

        public LocalizacaoController()
        {
            LocalizacaoRepository = new LocalizacaoRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(LocalizacaoRepository.Listar());
        }
    }
    

 
}