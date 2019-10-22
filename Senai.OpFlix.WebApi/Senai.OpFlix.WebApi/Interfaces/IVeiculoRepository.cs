using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfaces
{
    interface IVeiculoRepository
    {
        /// <summary>
        /// Busca todos os veículos
        /// </summary>
        /// <returns>Retorna uma lista de veículos/plataformas</returns>
        List<Veiculos> Listar();

        /// <summary>
        /// Cadastra um veículo
        /// </summary>
        /// <param name="veiculo"></param>
        /// <returns>Retorna uma verificação</returns>
        void Cadastrar(Veiculos veiculo);

        /// <summary>
        /// Busca um veículo/plataforma pelo seu id
        /// </summary>
        /// <param name="IdVeiculo"></param>
        /// <returns>Retorna um veículo/plataforma</returns>
        Veiculos BuscarPorId(int IdVeiculo);

        /// <summary>
        /// Altera o nome de um veículo
        /// </summary>
        /// <param name="veiculo"></param>
        /// <returns>Retorna uma verificação</returns>
        void Alterar(Veiculos veiculo);

        /// <summary>
        /// Apaga um veículo
        /// </summary>
        /// <param name="IdVeiculo"></param>
        /// <returns>Retorna uma verificação</returns>
        void Deletar(int IdVeiculo);
    }
}