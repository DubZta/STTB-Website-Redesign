using MediatR;
using STTB.Contracts.ResponseModels.Media;

namespace STTB.Contracts.RequestModels.Media;

public class GetMediaDetailRequest : IRequest<GetMediaDetailResponse>
{
    public Guid Id { get; set; }
}
