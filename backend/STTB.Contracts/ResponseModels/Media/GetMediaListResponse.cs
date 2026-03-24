namespace STTB.Contracts.ResponseModels.Media;

public class GetMediaListResponse
{
    public List<MediaListItem> Items { get; set; } = new();
    public int TotalCount { get; set; }
}

public class MediaListItem
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public string ThumbnailUrl { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
}
