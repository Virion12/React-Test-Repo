using List_manager_api.Domain.Db;
using List_manager_api.Domain.Dto.Auth;
using List_manager_api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace List_manager_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        

        private readonly ILogger<UserController> _logger;
        private readonly ApiDbContext _db;
        private readonly ITokenService _tokenService;

        public UserController(ILogger<UserController> logger, ApiDbContext db, ITokenService tokenService)
        {
            _logger = logger;
            _db = db;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginDetails)
        {
            User? user = await _db.Users.FirstOrDefaultAsync(u => u.Email == loginDetails.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(loginDetails.Password, user.PasswordHashed))
            {
                return Unauthorized("Invlaid credentials");
            }

            var newToken = _tokenService.GenerateToken(user);
            var refreshTokenRaw = await _tokenService.GenerateRefreshToken(user);

            return Ok(new { userId = user.Id, refreshToken = refreshTokenRaw, accessToken = newToken });
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest registerDetails)
        {

            User? user = await _db.Users.FirstOrDefaultAsync(u => u.Email == registerDetails.Email);
            if (user != null)
            {
                return BadRequest("User with this email is already registered");
            }

            if (registerDetails.Password == null || registerDetails.Password == string.Empty) {
                return BadRequest("Invalid password format");
            }
            var passwordHashed = BCrypt.Net.BCrypt.HashPassword(registerDetails.Password);

            user = new User { Email = registerDetails.Email, Name = registerDetails.Name, PasswordHashed = passwordHashed};
            
            _db.Users.Add(user);
            await _db.SaveChangesAsync();

            var accessToken = _tokenService.GenerateToken(user);
            var refreshToken = await _tokenService.GenerateRefreshToken(user);

            return Ok(new { userId = user.Id, refreshToken = refreshToken, accessToken = accessToken});

        }
    }
}
