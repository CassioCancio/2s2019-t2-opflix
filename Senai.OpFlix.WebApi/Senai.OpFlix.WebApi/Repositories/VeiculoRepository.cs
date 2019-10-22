using System;
using Senai.OpFlix.WebApi.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Senai.OpFlix.WebApi.Domains;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class VeiculoRepository : IVeiculoRepository
    {
        public void Alterar(Veiculos veiculo)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                Veiculos VeiculoBuscada = ctx.Veiculos.FirstOrDefault(x => x.IdVeiculo == veiculo.IdVeiculo);
                VeiculoBuscada.NomeVeiculo = veiculo.NomeVeiculo;
                ctx.Veiculos.Update(VeiculoBuscada);
                ctx.SaveChanges();
            }
        }

        public Veiculos BuscarPorId(int IdVeiculo)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Veiculos.FirstOrDefault(x => x.IdVeiculo == IdVeiculo);
            }
        }

        public void Cadastrar(Veiculos veiculo)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                ctx.Veiculos.Add(veiculo);
                ctx.SaveChanges();
            }
        }

        public void Deletar(int IdVeiculo)
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                Veiculos VeiculoBuscado = ctx.Veiculos.Find(IdVeiculo);
                ctx.Veiculos.Remove(VeiculoBuscado);
                ctx.SaveChanges();
            }
        }

        public List<Veiculos> Listar()
        {
            using (OpflixContext ctx = new OpflixContext())
            {
                return ctx.Veiculos.ToList();
            }
        }
    }
}
