using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Classificacoes
    {
        public Classificacoes()
        {
            Midias = new HashSet<Midias>();
        }

        public int IdClassificacao { get; set; }
        public string NomeClassificacao { get; set; }

        public ICollection<Midias> Midias { get; set; }
    }
}
