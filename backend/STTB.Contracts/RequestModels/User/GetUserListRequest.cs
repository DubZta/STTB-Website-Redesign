using MediatR;
using STTB.Contracts.ResponseModels.User;

namespace STTB.Contracts.RequestModels.User;

public class GetUserListRequest : IRequest<List<UserResponse>>
{
}
