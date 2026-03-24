using MediatR;

namespace STTB.Contracts.RequestModels.User;

public class DeleteUserRequest : IRequest<bool>
{
    public string Id { get; set; } = string.Empty;
}
