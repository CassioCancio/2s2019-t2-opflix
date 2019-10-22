using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface IUsuarioRepository
    {
        /// <summary>
        /// Busca todos os usuários
        /// </summary>
        /// <returns>Retorna uma lista de Usuarios sem senha</returns>
        List<UsuarioViewModel> Listar();

        /// <summary>
        /// Busca as informações de um usuário a partir de sua senha e e-mail
        /// </summary>
        /// <param name="login"></param>
        /// <returns>Retorna um usuario sem senha (objeto LoginViewModel)</returns>
        Usuarios BuscarPorEmailESenha(LoginViewModel login);

        /// <summary>
        /// Cadastra um usuário
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns>Retorna uma verificação</returns>
        void Cadastrar(Usuarios usuario);

        /// <summary>
        /// Apaga um usuário
        /// </summary>
        /// <param name="IdUsuario"></param>
        /// <returns>Retorna uma verificação</returns>
        void Deletar(int IdUsuario);
    }
}
