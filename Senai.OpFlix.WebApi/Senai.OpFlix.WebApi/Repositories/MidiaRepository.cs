using System;
using Senai.OpFlix.WebApi.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Senai.OpFlix.WebApi.Domains;
using Microsoft.EntityFrameworkCore;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class MidiaRepository : IMidiaRepository
    {
        public void Alterar(Midias midia)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                Midias MidiaBuscada = ctx.Midias.FirstOrDefault(x => x.IdMidia == midia.IdMidia);
                MidiaBuscada.Titulo = midia.Titulo;
                ctx.Midias.Update(MidiaBuscada);
                ctx.SaveChanges();
            }
        }

        public List<Midias> BuscarPorMes(int mes)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Midias.Include(x => x.IdCategoriaNavigation).Include(x => x.IdClassificacaoNavigation).Include(x => x.IdTipoNavigation).Include(x => x.IdVeiculoNavigation).Where(x => x.DataLancamento.Month == mes).ToList();
            }
        }

        public Midias BuscarPorId(int IdMidia)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Midias.FirstOrDefault(x => x.IdMidia == IdMidia);
            }
        }

        public void Cadastrar(Midias midia)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                ctx.Midias.Add(midia);
                ctx.SaveChanges();
            }
        }

        public void Deletar(int IdMidia)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                Midias MidiaBuscado = ctx.Midias.FirstOrDefault(x => x.IdMidia == IdMidia);
                ctx.Midias.Remove(MidiaBuscado);
                ctx.SaveChanges();
            }
        }

        public List<Midias> Listar()
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Midias.Include(x => x.IdCategoriaNavigation).Include(x => x.IdClassificacaoNavigation).Include(x => x.IdTipoNavigation).Include(x => x.IdVeiculoNavigation).ToList();
            }
        }

        public List<Midias> FiltrarCategoria(int id)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Midias.Include(x => x.IdCategoriaNavigation).Include(x => x.IdClassificacaoNavigation).Include(x => x.IdTipoNavigation).Include(x => x.IdVeiculoNavigation).Where(x => x.IdCategoria == id).ToList();
            }
        }

        public List<Midias> BuscarPorPlataforma(int IdVeiculo)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Midias.Include(x => x.IdCategoria).ToList();
            }
        }
    }
}
