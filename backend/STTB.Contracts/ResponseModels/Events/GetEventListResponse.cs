namespace STTB.Contracts.ResponseModels.Events;

public class GetEventListResponse
{
    public List<EventListItem> Items { get; set; } = new();
    public int TotalCount { get; set; }
}

public class EventListItem
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public DateTime EventDate { get; set; }
    public string Status { get; set; } = string.Empty;
    public string ThumbnailUrl { get; set; } = string.Empty;
}
