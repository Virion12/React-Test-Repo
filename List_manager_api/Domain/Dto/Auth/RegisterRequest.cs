namespace List_manager_api.Domain.Dto.Auth
{
    public class RegisterRequest
    {
        public required string Name { get; set; }
        public required string Password { get; set; }
        public required string Email { get; set; }
    }
}