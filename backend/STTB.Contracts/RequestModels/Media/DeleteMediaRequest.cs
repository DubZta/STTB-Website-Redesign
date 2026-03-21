using MediatR;

namespace STTB.Contracts.RequestModels.Media;

public class DeleteMediaRequest : IRequest<bool>
{
    public Guid Id { get; set; }
}
