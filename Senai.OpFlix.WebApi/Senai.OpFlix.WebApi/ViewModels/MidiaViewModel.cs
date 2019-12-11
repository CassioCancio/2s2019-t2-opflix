using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.ViewModels
{
    public class MidiaViewModel
    {
        public string Titulo { get; set; }
        public string Sinopse { get; set; }
        public int TempoDuracao { get; set; }
        public DateTime DataLancamento { get; set; }
        public int IdClassificacao { get; set; }
        public int IdCategoria { get; set; }
        public int IdVeiculo { get; set; }
        public int IdTipo { get; set; }

        public string Latitude { get; set; }
        public string Longitude { get; set; }
    }
}
