using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Tipos
    {
        public Tipos()
        {
            Midias = new HashSet<Midias>();
        }

        public int IdTipo { get; set; }
        public string TipoNome { get; set; }

        public ICollection<Midias> Midias { get; set; }
    }
}
