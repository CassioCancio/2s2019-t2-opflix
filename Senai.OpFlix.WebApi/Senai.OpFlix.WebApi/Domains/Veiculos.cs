using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Veiculos
    {
        public Veiculos()
        {
            Midias = new HashSet<Midias>();
        }

        public int IdVeiculo { get; set; }
        public string NomeVeiculo { get; set; }

        public ICollection<Midias> Midias { get; set; }
    }
}
