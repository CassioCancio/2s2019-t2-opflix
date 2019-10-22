using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class OpflixContext : DbContext
    {
        public OpflixContext()
        {
        }

        public OpflixContext(DbContextOptions<OpflixContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Categorias> Categorias { get; set; }
        public virtual DbSet<Classificacoes> Classificacoes { get; set; }
        public virtual DbSet<Midias> Midias { get; set; }
        public virtual DbSet<Tipos> Tipos { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }
        public virtual DbSet<Veiculos> Veiculos { get; set; }

        public virtual DbSet<Favoritos> Favoritos { get; set; }

        // Unable to generate entity type for table 'dbo.Favoritos'. Please see the warning messages.

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=.\\SqlExpress; Initial Catalog=M_Opflix;User Id=sa;Pwd=132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Favoritos>().HasKey(f => new { f.IdUsuario, f.IdMidia });

            modelBuilder.Entity<Favoritos>()
            .HasOne<Usuarios>(sc => sc.Usuario)
            .WithMany(s => s.Favoritos)
            .HasForeignKey(sc => sc.IdUsuario);

            modelBuilder.Entity<Favoritos>()
            .HasOne<Midias>(sc => sc.Midia)
            .WithMany(s => s.Favoritos)
            .HasForeignKey(sc => sc.IdMidia);

            modelBuilder.Entity<Categorias>(entity =>
            {
                entity.HasKey(e => e.IdCategoria);

                entity.HasIndex(e => e.NomeCategoria)
                    .HasName("UQ__Categori__98459A0B204DF838")
                    .IsUnique();

                entity.Property(e => e.NomeCategoria)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Classificacoes>(entity =>
            {
                entity.HasKey(e => e.IdClassificacao);

                entity.HasIndex(e => e.NomeClassificacao)
                    .HasName("UQ__Classifi__D372D09AA011C9EF")
                    .IsUnique();

                entity.Property(e => e.NomeClassificacao)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Midias>(entity =>
            {
                entity.HasKey(e => e.IdMidia);

                entity.Property(e => e.DataLancamento).HasColumnType("date");

                entity.Property(e => e.Sinopse)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.Titulo)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.Midias)
                    .HasForeignKey(d => d.IdCategoria)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Midias__IdCatego__09A971A2");

                entity.HasOne(d => d.IdClassificacaoNavigation)
                    .WithMany(p => p.Midias)
                    .HasForeignKey(d => d.IdClassificacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Midias__IdClassi__08B54D69");

                entity.HasOne(d => d.IdTipoNavigation)
                    .WithMany(p => p.Midias)
                    .HasForeignKey(d => d.IdTipo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Midias__IdTipo__0B91BA14");

                entity.HasOne(d => d.IdVeiculoNavigation)
                    .WithMany(p => p.Midias)
                    .HasForeignKey(d => d.IdVeiculo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Midias__IdVeicul__0A9D95DB");
            });

            modelBuilder.Entity<Tipos>(entity =>
            {
                entity.HasKey(e => e.IdTipo);

                entity.HasIndex(e => e.TipoNome)
                    .HasName("UQ__Tipos__92ADD70B9FE6E3F9")
                    .IsUnique();

                entity.Property(e => e.TipoNome)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.HasKey(e => e.IdUsuario);

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuarios__A9D10534564D1FF0")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.TipoUsuario)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Veiculos>(entity =>
            {
                entity.HasKey(e => e.IdVeiculo);

                entity.HasIndex(e => e.NomeVeiculo)
                    .HasName("UQ__Veiculos__D91FAE85E47D832D")
                    .IsUnique();

                entity.Property(e => e.NomeVeiculo)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });
        }
    }
}
