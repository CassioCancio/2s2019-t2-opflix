﻿using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface ITipoRepository
    {
        /// <summary>
        /// Busca todas as categorias
        /// </summary>
        /// <returns>Retorna uma lista de categorias</returns>
        List<Tipos> Listar();
    }
}