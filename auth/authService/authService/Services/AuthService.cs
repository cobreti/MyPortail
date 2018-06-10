using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace authService.Services
{
    public class AuthService : IAuthService
    {
        private Contexts.AuthDbContext AuthContext { get; }

        public AuthService(Contexts.AuthDbContext authContext)
        {
            AuthContext = authContext;
        }

        public JwtSecurityToken CreateToken(Model.Api.LoginCredentials credentials)
        {
            try
            {
                var securityKey = "kFAAT3.bFnMhvHYtCcEcyQZspBqNHQmKWEMt";

                var claims = new[]
                {
                    new Claim(ClaimTypes.Name, credentials.Username)
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securityKey));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "yourdomain.com",
                    audience: "yourdomain.com",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds);

                return token;
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex);
                throw;
            }
        }
    }
}