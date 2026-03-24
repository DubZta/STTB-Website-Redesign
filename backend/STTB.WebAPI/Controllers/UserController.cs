using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using STTB.Contracts.RequestModels.User;
using STTB.Contracts.ResponseModels.User;

namespace STTB.WebAPI.Controllers;

[ApiController]
[Route("api/user")]
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
public class UserController : ControllerBase
{
    private readonly IMediator _mediator;

    public UserController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    public async Task<ActionResult<List<UserResponse>>> GetList(CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(new GetUserListRequest(), cancellationToken);
        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<UserResponse>> Create([FromBody] CreateUserRequest request, CancellationToken cancellationToken)
    {
        try
        {
            var result = await _mediator.Send(request, cancellationToken);
            return Ok(result);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(string id, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(new DeleteUserRequest { Id = id }, cancellationToken);
        if (!result) return NotFound();
        return NoContent();
    }

    [HttpPut("{id}/password")]
    public async Task<ActionResult> UpdatePassword(string id, [FromBody] UpdatePasswordDto dto, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(new UpdateUserPasswordRequest 
        { 
            Id = id, 
            NewPassword = dto.NewPassword 
        }, cancellationToken);
        
        if (!result) return BadRequest(new { message = "Failed to update password." });
        return Ok();
    }

    public class UpdatePasswordDto
    {
        public string NewPassword { get; set; } = string.Empty;
    }
}
