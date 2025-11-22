using List_manager_api.Domain.Db;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace List_manager_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        

        private readonly ILogger<UserController> _logger;
        private readonly ApiDbContext _db;

        public UserController(ILogger<UserController> logger, ApiDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        [HttpGet("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginDetails)
        {
            User? user = await _db.Users.FirstOrDefaultAsync(u => u.Email == loginDetails.Email);
            if(user == null)
            {
                return Unauthorized("Invlaid credentials");
            }
           
           return Ok();
        }
    }
}
