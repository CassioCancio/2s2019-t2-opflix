using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface IFavoritoRepository
    {
        /// <summary>
        /// Busca todos os favoritos do usuário
        /// </summary>
        /// <param name="IdUsuario"></param>
        /// <returns>Retorna uma lista de favoritos</returns>
        List<Favoritos> Listar(int IdUsuario);

        /// <summary>
        /// Cadastra um favorito
        /// </summary>
        /// <param name="favorito"></param>
        /// <returns>Retorna uma verificação</returns>
        void Cadastrar(Favoritos favorito);

        /// <summary>
        /// Apaga um favorito
        /// </summary>
        /// <param name="favorito"></param>
        /// <param name="IdUsuario"></param>
        /// <returns>Retorna uma verificação</returns>
        void Deletar(Favoritos favorito, int IdUsuario);
    }
}
