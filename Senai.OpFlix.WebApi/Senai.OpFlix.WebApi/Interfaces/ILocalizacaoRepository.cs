using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface ILocalizacaoRepository
    {
        List<Localizacoes> Listar();

        /// <summary>
        /// Busca uma mídia pelo seu id
        /// </summary>
        /// <param name="IdMidia"></param>
        /// <returns>Retorna uma mídia</returns>
        List<Localizacoes> BuscarPorId(int IdMidia);

        /// <summary>
        /// Cadastra uma localizacao
        /// </summary>
        /// <param name="localizacao"></param>
        /// <returns>Retorna uma verificação</returns>
        void Cadastrar(Localizacoes localizacao);
    }
}
