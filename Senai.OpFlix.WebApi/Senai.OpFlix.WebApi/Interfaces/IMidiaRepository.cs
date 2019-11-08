using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface IMidiaRepository
    {
        /// <summary>
        /// Busca todas as mídias
        /// </summary>
        /// <returns>Retorna uma lista de mídias</returns>
        List<Midias> Listar();

        List<Midias> FiltrarCategoria(int id);

        /// <summary>
        /// Busca todas as mídias de um determinado mês
        /// </summary>
        /// <param name="mes"></param>
        /// <returns>Retorna uma lista de mídias</returns>
        List<Midias> BuscarPorMes(int mes);

        /// <summary>
        /// Busca todas as mídias de uma determinada plataforma/veículo
        /// </summary>
        /// <param name="IdPlataforma"></param>
        /// <returns>Retorna uma lista de mídias</returns>
        List<Midias> BuscarPorPlataforma(int IdPlataforma);

        /// <summary>
        /// Busca uma mídia pelo seu id
        /// </summary>
        /// <param name="IdMidia"></param>
        /// <returns>Retorna uma mídia</returns>
        Midias BuscarPorId(int IdMidia);

        /// <summary>
        /// Cadastra uma mídia
        /// </summary>
        /// <param name="midia"></param>
        /// <returns>Retorna uma verificação</returns>
        void Cadastrar(Midias midia);

        /// <summary>
        /// Altera o nome de uma mídia
        /// </summary>
        /// <param name="midia"></param>
        /// <returns>Retorna uma verificação</returns>
        void Alterar(Midias midia);

        /// <summary>
        /// Apaga uma mídia
        /// </summary>
        /// <param name="IdMidia"></param>
        /// <returns>Retorna uma verificação</returns>
        void Deletar(int IdMidia);
    }
}
