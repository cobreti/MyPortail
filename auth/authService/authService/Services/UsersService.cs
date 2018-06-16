﻿using System;
using System.Threading.Tasks;

namespace authService.Services
{
    public class UsersService : IUsersService
    {
        private Contexts.UsersDbContext UsersContext { get; }
        private IPasswordHasher PasswordHasher { get; }
        
        public UsersService(
            Contexts.UsersDbContext usersContext,
            IPasswordHasher passwordHasher)
        {
            UsersContext = usersContext;
            PasswordHasher = passwordHasher;
        }

        public async Task<Model.Db.User> AddUser(Model.Api.User user)
        {
            try
            {
                var dbUser = new Model.Db.User
                {
                    Name = user.Name,
                    Password = PasswordHasher.HashPassword(user.Password),
                    Id = Guid.NewGuid().ToString()
                };

                using (var ctx = UsersContext)
                {
                    ctx.Database.EnsureCreated();
                    ctx.Users.Add(dbUser);
                    await ctx.SaveChangesAsync();
                }
                
                return dbUser;
            }
            catch (Exception ex)
            {
                System.Console.Error.WriteLine(ex.ToString());
                throw;
            }
        }
    }
}
