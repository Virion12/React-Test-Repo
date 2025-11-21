using Microsoft.Extensions.Configuration.UserSecrets;

namespace List_manager_api.Domain.Db
{
    public class ListColumn
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public DateTime CreatedAt { get; set; }
        public int BoardId { get; set; }
        public Board Board { get; set; }
        public List<TaskElement> Tasks { get; set; } = [];
        


    }
}
