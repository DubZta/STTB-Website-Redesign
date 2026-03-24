using MediatR;
using STTB.Contracts.ResponseModels.User;

namespace STTB.Contracts.RequestModels.User;

public class CreateUserRequest : IRequest<UserResponse>
{
    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}
