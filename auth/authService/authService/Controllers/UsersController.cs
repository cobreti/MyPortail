using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace authService.Controllers
{
    [Route("api/users")]
    public class UsersController : Controller
    {
        private Services.IUsersService UsersService { get; }

        public UsersController(Services.IUsersService usersService)
        {
            UsersService = usersService;
        }

        [Route("create")]
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateUser([FromBody] Model.Api.User user)
        {
            try
            {
                var dbUser = await UsersService.AddUser(user);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status400BadRequest);
            }

            return StatusCode(StatusCodes.Status200OK);
        }
    }
}
