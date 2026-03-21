using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace STTB.Entities;

public class Media : IHaveCreateAndUpdateAudit
{
    [Key]
    public Guid Id { get; set; }

    [StringLength(2048)]
    public string Url { get; set; } = string.Empty;

    [StringLength(255)]
    public string Filename { get; set; } = string.Empty;

    [StringLength(100)]
    public string MimeType { get; set; } = string.Empty;

    public long FileSize { get; set; }

    [StringLength(255)]
    public string? AltText { get; set; }

    // Phase 3 Extensions
    [StringLength(255)]
    public string Title { get; set; } = string.Empty;

    [StringLength(255)]
    public string Slug { get; set; } = string.Empty;

    [StringLength(100)]
    public string Category { get; set; } = string.Empty;

    public string Content { get; set; } = string.Empty;

    [StringLength(2048)]
    public string ThumbnailUrl { get; set; } = string.Empty;

    // Audit fields
    [StringLength(255)]
    public string CreatedBy { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    [StringLength(255)]
    public string? UpdatedBy { get; set; }
    public DateTime? UpdatedAt { get; set; }
}
