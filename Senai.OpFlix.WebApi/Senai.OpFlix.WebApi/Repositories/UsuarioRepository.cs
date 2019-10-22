using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfaces;
using Senai.OpFlix.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public Usuarios BuscarPorEmailESenha(LoginViewModel login)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Usuarios.FirstOrDefault(x => x.Email == login.Email && x.Senha == login.Senha);
            }
        }

        public void Cadastrar(Usuarios usuario)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                ctx.Usuarios.Add(usuario);
                ctx.SaveChanges();
            }
        }

        public void Deletar(int IdUsuario)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                Usuarios UsuarioBuscado = ctx.Usuarios.Find(IdUsuario);
                ctx.Usuarios.Remove(UsuarioBuscado);
                ctx.SaveChanges();
            }
        }

        public List<UsuarioViewModel> Listar()
        {
            List<Usuarios> usuarios = new List<Usuarios>();

            List<UsuarioViewModel> usuariosViewModel = new List<UsuarioViewModel>();

            using (OpflixContext ctx = new OpflixContext())
            {
                usuarios = ctx.Usuarios.ToList();
            }

            foreach (var item in usuarios)
            {
                UsuarioViewModel usuario = new UsuarioViewModel();
                usuario.IdUsuario = item.IdUsuario;
                usuario.Nome = item.Nome;
                usuario.Email = item.Email;
                usuario.TipoUsuario = item.TipoUsuario;

                usuariosViewModel.Add(usuario);
            }

            return(usuariosViewModel);
        }
    }
}
