using MediatR;
using Microsoft.AspNetCore.Identity;
using STTB.Contracts.RequestModels.User;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.User;

public class DeleteUserRequestHandler : IRequestHandler<DeleteUserRequest, bool>
{
    private readonly UserManager<ApplicationUser> _userManager;

    public DeleteUserRequestHandler(UserManager<ApplicationUser> userManager)
    {
        _userManager = userManager;
    }

    public async Task<bool> Handle(DeleteUserRequest request, CancellationToken cancellationToken)
    {
        var user = await _userManager.FindByIdAsync(request.Id);
        if (user == null) return false;

        if (user.UserName != null && user.UserName.Equals("admin", StringComparison.OrdinalIgnoreCase))
        {
            throw new InvalidOperationException("Default administrator account cannot be deleted.");
        }
        var result = await _userManager.DeleteAsync(user);
        return result.Succeeded;
    }
}
