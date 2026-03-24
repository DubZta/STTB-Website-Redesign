using MediatR;
using Microsoft.AspNetCore.Identity;
using STTB.Contracts.RequestModels.User;
using STTB.Contracts.ResponseModels.User;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.User;

public class CreateUserRequestHandler : IRequestHandler<CreateUserRequest, UserResponse>
{
    private readonly UserManager<ApplicationUser> _userManager;

    public CreateUserRequestHandler(UserManager<ApplicationUser> userManager)
    {
        _userManager = userManager;
    }

    public async Task<UserResponse> Handle(CreateUserRequest request, CancellationToken cancellationToken)
    {
        var user = new ApplicationUser
        {
            UserName = request.Username,
            // IdentityUser requires Email, but the user wants to minimize it. 
            // We'll use a dummy email if needed, or just leave it null if Identity allows.
            // Program.cs seed uses admin@sttb.ac.id.
            Email = $"{request.Username}@system.local" 
        };

        var result = await _userManager.CreateAsync(user, request.Password);
        if (!result.Succeeded)
        {
            var errors = string.Join(", ", result.Errors.Select(e => e.Description));
            throw new InvalidOperationException($"User creation failed: {errors}");
        }

        // Add to Admin role by default as per current requirements for CMS access
        await _userManager.AddToRoleAsync(user, "Admin");

        return new UserResponse
        {
            Id = user.Id,
            Username = user.UserName ?? string.Empty
        };
    }
}
