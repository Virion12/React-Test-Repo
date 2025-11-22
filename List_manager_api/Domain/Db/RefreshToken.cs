namespace List_manager_api.Domain.Db
{
    public class RefreshToken
    {
        public Guid Id { get; set; }
        public required string Token { get; set; }
        public int UserId { get; set; }
        public DateTime ExpiresOnUtc { get; set; }
        public User User { get; set; } = null!;
    }
}
