using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Midias
    {
        public int IdMidia { get; set; }
        public string Titulo { get; set; }
        public string Sinopse { get; set; }
        public int TempoDuracao { get; set; }
        public DateTime DataLancamento { get; set; }
        public int IdClassificacao { get; set; }
        public int IdCategoria { get; set; }
        public int IdVeiculo { get; set; }
        public int IdTipo { get; set; }

        public List<Favoritos> Favoritos { get; set; }

        public Categorias IdCategoriaNavigation { get; set; }
        public Classificacoes IdClassificacaoNavigation { get; set; }
        public Tipos IdTipoNavigation { get; set; }
        public Veiculos IdVeiculoNavigation { get; set; }
    }
}
