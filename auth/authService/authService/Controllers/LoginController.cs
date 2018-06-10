using System;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Mvc;

namespace authService.Controllers
{
    [Route("api/login")]
    public class LoginController : Controller
    {
        private Services.IAuthService AuthService { get; }

        public LoginController(Services.IAuthService authService)
        {
            AuthService = authService;
        }

        public IActionResult Login([FromBody] Model.Api.LoginCredentials credentials)
        {
            try
            {
                var token = AuthService.CreateToken(credentials);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (Exception ex)
            {
                return Unauthorized();
            }
        }
    }
}
