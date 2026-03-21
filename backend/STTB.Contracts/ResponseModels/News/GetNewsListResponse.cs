namespace STTB.Contracts.ResponseModels.News;

public class GetNewsListResponse
{
    public List<NewsListItem> Items { get; set; } = new();
    public int TotalCount { get; set; }
}

public class NewsListItem
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public DateTime PublishedAt { get; set; }
    public string Status { get; set; } = string.Empty;
    public string ThumbnailUrl { get; set; } = string.Empty;
}
