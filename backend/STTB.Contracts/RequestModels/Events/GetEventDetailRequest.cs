using MediatR;
using STTB.Contracts.ResponseModels.Events;

namespace STTB.Contracts.RequestModels.Events;

public class GetEventDetailRequest : IRequest<GetEventDetailResponse>
{
    public Guid Id { get; set; }
}
