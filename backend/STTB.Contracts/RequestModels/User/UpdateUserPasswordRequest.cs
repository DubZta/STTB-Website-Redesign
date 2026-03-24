using MediatR;

namespace STTB.Contracts.RequestModels.User;

public class UpdateUserPasswordRequest : IRequest<bool>
{
    public string Id { get; set; } = string.Empty;
    public string NewPassword { get; set; } = string.Empty;
}
