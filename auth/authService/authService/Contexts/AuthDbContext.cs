using System;
using Microsoft.EntityFrameworkCore;
using MySql.Data.EntityFrameworkCore;

namespace authService.Contexts
{
    public class AuthDbContext : DbContext
    {
        public DbSet<Model.User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("server=localhost;database=auth;user=authUser;password=igQFUwjZZyxgken7gcKg*gTu");
            //base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Model.User>(entity =>
            {
                entity.HasKey(b => b.Id);
                entity.Property(b => b.Name).IsRequired();
            });
        }
    }
}

