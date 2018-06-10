using System;
using System.Threading.Tasks;

namespace authService.Services
{
    public class UsersService : IUsersService
    {
        private Contexts.AuthDbContext _authContext { get; }
        
        public UsersService(Contexts.AuthDbContext authContext)
        {
            _authContext = authContext;
        }

        public async Task<Model.Db.User> AddUser(Model.Api.User user)
        {
            try
            {
                var dbUser = new Model.Db.User
                {
                    Name = user.Name,
                    Password = user.Password,
                    Id = Guid.NewGuid().ToString()
                };

                using (var ctx = _authContext)
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
