using MediatR;
using STTB.Contracts.ResponseModels.Media;

namespace STTB.Contracts.RequestModels.Media;

public class UploadMediaRequest : IRequest<UploadMediaResponse>
{
    public string Url { get; set; } = string.Empty;
    public string? AltText { get; set; }

    // Content Metadata
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public string ThumbnailUrl { get; set; } = string.Empty;
}
