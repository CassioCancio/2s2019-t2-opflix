using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Categorias
    {
        public Categorias()
        {
            Midias = new HashSet<Midias>();
        }

        public int IdCategoria { get; set; }
        public string NomeCategoria { get; set; }

        public ICollection<Midias> Midias { get; set; }
    }
}
