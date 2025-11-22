 namespace List_manager_api.Domain.Dto.Auth
{
   public class LoginRequest
    {
        public required string Username { get; set; }
        public required string Password { get; set; }
    }

}