namespace List_manager_api.Domain.Db
{
    public class BoardShare
    {
        public int Id { get; set; }
        public int BoardId { get; set; }
        public Board Board { get; set; } = null!;
        public int UserId { get; set; }
        public User User { get; set; } = null!;

        public DateTime SharedAt { get; set; }
        public BoardPermission Permission { get; set; }
        public int? SharedByUserId { get; set; }
        public User? SharedByUser { get; set; }
    }

    public enum BoardPermission
    {
        Read = 1,
        Write = 2,
        Admin = 3
    }
}
