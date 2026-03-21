using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace STTB.Entities;

public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Media> Media { get; set; } = default!;
    public DbSet<News> News { get; set; } = default!;
    public DbSet<Event> Events { get; set; } = default!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Ensure slug is unique
        modelBuilder.Entity<News>()
            .HasIndex(n => n.Slug)
            .IsUnique();

        modelBuilder.Entity<Event>()
            .HasIndex(e => e.Slug)
            .IsUnique();

        modelBuilder.Entity<Media>()
            .HasIndex(m => m.Slug)
            .IsUnique();
            
        // Configure delete behavior: restrict deleting media if used by news/events
        // (Removed because ThumbnailUrl is now fully disconnected from the Media table)
    }
}
