using BCrypt.Net;
using List_manager_api.Domain.Db;
using List_manager_api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace List_manager_api.Services
{
    public class TokenService : ITokenService
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<TokenService> _logger;
        private readonly ApiDbContext _db;

        public TokenService(IConfiguration configuration, ILogger<TokenService> logger, ApiDbContext db)
        {
            _configuration = configuration;
            _logger = logger;
            _db = db;
        }

        public async Task<string> GenerateRefreshToken (User user)
        {
            if (user == null)
            {
                _logger.LogWarning("Attempted to generate refresh token for null user.");
                throw new Exception("No user to generate refresh token");
            }
            var existingRefreshToken = await _db.RefreshTokens.FirstOrDefaultAsync(t => t.UserId == user.Id);
            var rawRefreshToken = Convert.ToBase64String(RandomNumberGenerator.GetBytes(32));

            if (existingRefreshToken == null)
            {
                _logger.LogInformation($"No refresh Token created for user {user.Id} createing new one");
                var refreshToken = new RefreshToken
                {
                    Id = Guid.NewGuid(),
                    UserId = user.Id,
                    Token = BCrypt.Net.BCrypt.HashPassword(rawRefreshToken),
                    ExpiresOnUtc = DateTime.UtcNow.AddDays(30),
                };
                //_db.Add(refreshToken)
                _db.RefreshTokens.Add(refreshToken);


            }
            else
            {
                _logger.LogInformation($"Generating token for user {user.Id}");
                existingRefreshToken.Token = BCrypt.Net.BCrypt.HashPassword(rawRefreshToken);
                existingRefreshToken.ExpiresOnUtc = DateTime.UtcNow.AddDays(30);
                _db.RefreshTokens.Update(existingRefreshToken);
            }
                

            await _db.SaveChangesAsync();
            return rawRefreshToken;
        }

        public string GenerateToken(User user)
        {  
            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
            new Claim(ClaimTypes.Email,user.Email),
            new Claim("UserId",user.Id.ToString())
            };

            var token = new JwtSecurityToken(
                issuer: "ListManagerApi",
                audience: "ListManagerApiAudience",
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(10),
                signingCredentials: creds
                );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public Task<bool> RevokeRefreshToken(string refreshToken)
        {
            throw new NotImplementedException();
        }

        public Task<bool> SaveRefreshToken(int userId, string refreshToken)
        {
            throw new NotImplementedException();
        }

        public Task<bool> ValidateRefreshToken(string refreshToken)
        {
            throw new NotImplementedException();
        }

        
    }
}
