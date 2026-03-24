using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using STTB.Contracts.RequestModels.User;
using STTB.Contracts.ResponseModels.User;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.User;

public class GetUserListRequestHandler : IRequestHandler<GetUserListRequest, List<UserResponse>>
{
    private readonly UserManager<ApplicationUser> _userManager;

    public GetUserListRequestHandler(UserManager<ApplicationUser> userManager)
    {
        _userManager = userManager;
    }

    public async Task<List<UserResponse>> Handle(GetUserListRequest request, CancellationToken cancellationToken)
    {
        var users = await _userManager.Users
            .Select(u => new UserResponse
            {
                Id = u.Id,
                Username = u.UserName ?? string.Empty
            })
            .ToListAsync(cancellationToken);

        return users;
    }
}
