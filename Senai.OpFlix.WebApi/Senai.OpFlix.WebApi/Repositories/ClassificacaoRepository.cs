using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class ClassificacaoRepository : IClassificacaoRepository
    {
        public List<Classificacoes> Listar()
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Classificacoes.ToList();
            }
        }
    }
}
