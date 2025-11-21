namespace List_manager_api.Domain.Db
{
    public class Board
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool IsPublic { get; set; }
        public int OwnerId { get; set; }
        public User Owner { get; set; } = null!;
        public List<BoardShare> BoardShares { get; set; } = [];
        public List<ListColumn> Columns { get; set; } = [];
    }
}
