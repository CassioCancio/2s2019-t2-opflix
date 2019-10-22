using System;
using Senai.OpFlix.WebApi.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Senai.OpFlix.WebApi.Domains;
using Microsoft.EntityFrameworkCore;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class FavoritoRepository : IFavoritoRepository
    {
        public void Cadastrar(Favoritos favorito)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                ctx.Favoritos.Add(favorito);
                ctx.SaveChanges();
            }
        }

        public void Deletar(Favoritos favorito, int IdUsuario)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                Favoritos FavoritoBuscado = ctx.Favoritos.FirstOrDefault(x => x.IdUsuario == IdUsuario && x.IdMidia == favorito.IdMidia);
                ctx.Favoritos.Remove(FavoritoBuscado);
                ctx.SaveChanges();
            }
        }

        public List<Favoritos> Listar(int IdUsuario)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Favoritos.Include(x => x.Midia).Where(x => x.IdUsuario == IdUsuario).ToList();
            }
        }
    }
}
