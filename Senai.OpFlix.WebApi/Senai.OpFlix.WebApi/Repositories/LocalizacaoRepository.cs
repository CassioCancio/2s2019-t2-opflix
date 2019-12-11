using System;
using Senai.OpFlix.WebApi.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Senai.OpFlix.WebApi.Domains;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class LocalizacaoRepository : ILocalizacaoRepository
    {
        public readonly IMongoCollection<Localizacoes> _localizacoes;

        public LocalizacaoRepository()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("m_opflix");
            _localizacoes = database.GetCollection<Localizacoes>("mapas");
        }

        public List<Localizacoes> BuscarPorId(int IdMidia)
        {
            return _localizacoes.Find(x => x.Midia.IdMidia == IdMidia).ToList();
        }

        public void Cadastrar(Localizacoes localizacao)
        {
            _localizacoes.InsertOne(localizacao);
        }

        public List<Localizacoes> Listar()
        {
            return _localizacoes.Find(l => true).ToList();
        }
    }
}