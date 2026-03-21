using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace STTB.Entities;

public class News : IHaveCreateAndUpdateAudit
{
    [Key]
    public Guid Id { get; set; }

    [StringLength(255)]
    [Required]
    public string Title { get; set; } = string.Empty;

    [StringLength(255)]
    [Required]
    public string Slug { get; set; } = string.Empty;

    [StringLength(100)]
    [Required]
    public string Category { get; set; } = string.Empty;

    public DateTime PublishedAt { get; set; }

    [Required]
    public string Content { get; set; } = string.Empty; // Store as long text/JSONB

    [StringLength(50)]
    [Required]
    public string Status { get; set; } = "draft"; // e.g., 'draft', 'published'

    [StringLength(2048)]
    [Required]
    public string ThumbnailUrl { get; set; } = string.Empty; // Mandatory URL or Path

    // Audit fields
    [StringLength(255)]
    public string CreatedBy { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    [StringLength(255)]
    public string? UpdatedBy { get; set; }
    public DateTime? UpdatedAt { get; set; }
}
