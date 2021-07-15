using Microsoft.EntityFrameworkCore;

namespace RestAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Models.User> User { get; set; }
        public DbSet<Models.Item> Item { get; set; }
        public DbSet<Models.Bid> Bid { get; set; }
        public DbSet<Models.Bot> Bot { get; set; }
    }
}
