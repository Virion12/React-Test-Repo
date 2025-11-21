namespace List_manager_api.Domain.Db
{
    public class User
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Email { get; set; }
        public required string PasswordHashed { get; set; }
        public string? PhotoUrl { get; set; }
        public List<Board> OwnedBoards { get; set; } = [];
        public List<BoardShare> SharedBoards { get; set; } = [];

    }
}
