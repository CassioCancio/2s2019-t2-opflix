using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface ICategoriaRepository
    {
        /// <summary>
        /// Busca todas as categorias
        /// </summary>
        /// <returns>Retorna uma lista de categorias</returns>
        List<Categorias> Listar();

        /// <summary>
        /// Cadastra uma categoria
        /// </summary>
        /// <param name="categoria"></param>
        /// <returns>Retorna uma verificação</returns>
        void Cadastrar(Categorias categoria);

        /// <summary>
        /// Busca uma categoria pelo seu id
        /// </summary>
        /// <param name="IdCategoria"></param>
        /// <returns>Retorna uma categoria</returns>
        Categorias BuscarPorId(int IdCategoria);

        /// <summary>
        /// Altera o nome de uma categoria
        /// </summary>
        /// <param name="categoria"></param>
        /// <returns>Retorna uma verificação</returns>
        void Alterar(Categorias categoria);

        /// <summary>
        /// Apaga uma categoria
        /// </summary>
        /// <param name="IdCategoria"></param>
        /// <returns>Retorna uma verificação</returns>
        void Deletar(int IdCategoria);
    }
}