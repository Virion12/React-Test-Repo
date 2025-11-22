using Microsoft.EntityFrameworkCore;

namespace List_manager_api.Domain.Db
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {
        }

        // DbSety
        public DbSet<TaskElement> Tasks { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Board> Boards { get; set; }
        public DbSet<BoardShare> BoardShares { get; set; }
        public DbSet<ListColumn> ListColumns { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Konfiguracja Board
            modelBuilder.Entity<Board>(entity =>
            {
                entity.HasOne(b => b.Owner)
                    .WithMany(u => u.OwnedBoards)
                    .HasForeignKey(b => b.OwnerId)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.Property(b => b.CreatedAt)
                    .HasDefaultValueSql("GETUTCDATE()");
            });

            // Konfiguracja BoardShare
            modelBuilder.Entity<BoardShare>(entity =>
            {
                // Unikalny indeks
                entity.HasIndex(bs => new { bs.BoardId, bs.UserId })
                    .IsUnique();

                // Relacja do Board (CASCADE - OK)
                entity.HasOne(bs => bs.Board)
                    .WithMany(b => b.BoardShares)
                    .HasForeignKey(bs => bs.BoardId)
                    .OnDelete(DeleteBehavior.Cascade);

                // Relacja do User 
                entity.HasOne(bs => bs.User)
                    .WithMany(u => u.SharedBoards)
                    .HasForeignKey(bs => bs.UserId)
                    .OnDelete(DeleteBehavior.NoAction);  

                // Relacja do SharedByUser - NO ACTION
                entity.HasOne(bs => bs.SharedByUser)
                    .WithMany()
                    .HasForeignKey(bs => bs.SharedByUserId)
                    .OnDelete(DeleteBehavior.NoAction);
            });

            // Konfiguracja ListColumn
            modelBuilder.Entity<ListColumn>(entity =>
            {
                entity.HasOne(lc => lc.Board)
                    .WithMany(b => b.Columns)
                    .HasForeignKey(lc => lc.BoardId)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.Property(lc => lc.CreatedAt)
                    .HasDefaultValueSql("GETUTCDATE()");
            });

            // Konfiguracja TaskElement
            modelBuilder.Entity<TaskElement>(entity =>
            {
                entity.ToTable("Tasks");

                entity.HasOne(t => t.ListColumn)
                    .WithMany(lc => lc.Tasks)
                    .HasForeignKey(t => t.ColumnId)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.Property(t => t.CreatedAt)
                    .HasDefaultValueSql("GETUTCDATE()");
            });

            // Konfiguracja User
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(u => u.Email)
                    .IsUnique();
            });
        }
    }
}