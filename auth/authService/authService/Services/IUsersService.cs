using System;
using System.Threading.Tasks;

namespace authService.Services
{
    public interface IUsersService
    {
        Task<Model.Db.User> AddUser(Model.Api.User user);
    }
}