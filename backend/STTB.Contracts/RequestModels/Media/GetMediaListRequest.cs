using MediatR;
using STTB.Contracts.ResponseModels.Media;

namespace STTB.Contracts.RequestModels.Media;

public class GetMediaListRequest : IRequest<GetMediaListResponse>
{
    public int Page { get; set; } = 1;
    public int PageSize { get; set; } = 10;
    public string? Search { get; set; }
    public string? Category { get; set; }
}
