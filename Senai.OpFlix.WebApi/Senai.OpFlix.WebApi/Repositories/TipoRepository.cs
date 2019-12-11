using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class TipoRepository : ITipoRepository
    {
        public List<Tipos> Listar()
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Tipos.ToList();
            }
        }
    }
}
