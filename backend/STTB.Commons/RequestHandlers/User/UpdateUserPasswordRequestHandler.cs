using MediatR;
using Microsoft.AspNetCore.Identity;
using STTB.Contracts.RequestModels.User;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.User;

public class UpdateUserPasswordRequestHandler : IRequestHandler<UpdateUserPasswordRequest, bool>
{
    private readonly UserManager<ApplicationUser> _userManager;

    public UpdateUserPasswordRequestHandler(UserManager<ApplicationUser> userManager)
    {
        _userManager = userManager;
    }

    public async Task<bool> Handle(UpdateUserPasswordRequest request, CancellationToken cancellationToken)
    {
        var user = await _userManager.FindByIdAsync(request.Id);
        if (user == null) return false;

        var token = await _userManager.GeneratePasswordResetTokenAsync(user);
        var result = await _userManager.ResetPasswordAsync(user, token, request.NewPassword);
        
        return result.Succeeded;
    }
}
