namespace List_manager_api.Domain.Db
{
    public class TaskElement
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public DateTime EndDatre { get; set; }
        public DateTime CreatedAt { get; set; }
        public string? Location { get; set; }
        public string? Description { get; set; }
        public bool IsDone { get; set; }
        public int ColumnId { get; set; }
        public ListColumn ListColumn { get; set; }


    }
}
