using MediatR;

namespace STTB.Contracts.RequestModels.News;

public class CreateNewsRequest : IRequest<Guid>
{
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public DateTime PublishedAt { get; set; }
    public string Content { get; set; } = string.Empty;
    public string Status { get; set; } = "draft";
    public string ThumbnailUrl { get; set; } = string.Empty;
}
