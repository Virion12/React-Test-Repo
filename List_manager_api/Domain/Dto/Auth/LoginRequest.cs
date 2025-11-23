 namespace List_manager_api.Domain.Dto.Auth
{
   public class LoginRequest
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
    }

}