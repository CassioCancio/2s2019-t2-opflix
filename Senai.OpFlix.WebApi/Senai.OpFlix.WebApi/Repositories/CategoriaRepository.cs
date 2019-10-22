using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class CategoriaRepository : ICategoriaRepository
    {
        public void Alterar(Categorias categoria)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                Categorias CategoriaBuscada = ctx.Categorias.FirstOrDefault(x => x.IdCategoria == categoria.IdCategoria);
                CategoriaBuscada.NomeCategoria = categoria.NomeCategoria;
                ctx.Categorias.Update(CategoriaBuscada);
                ctx.SaveChanges();
            }
        }

        public Categorias BuscarPorId(int IdCategoria)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Categorias.FirstOrDefault(x => x.IdCategoria == IdCategoria);
            }
        }

        public void Cadastrar(Categorias categoria)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                ctx.Categorias.Add(categoria);
                ctx.SaveChanges();
            }
        }

        public void Deletar(int IdCategoria)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                Categorias CategoriaBuscado = ctx.Categorias.Find(IdCategoria);
                ctx.Categorias.Remove(CategoriaBuscado);
                ctx.SaveChanges();
            }
        }

        public List<Categorias> Listar()
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Categorias.ToList();
            }
        }
    }
}
