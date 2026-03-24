using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using STTB.Contracts.RequestModels.Media;
using STTB.Contracts.ResponseModels.Media;

namespace STTB.WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
public class MediaController : ControllerBase
{
    private readonly IMediator _mediator;

    public MediaController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("upload")]
    public async Task<ActionResult<UploadMediaResponse>> Upload(
        [FromBody] UploadMediaRequest request,
        CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(request, cancellationToken);
        return Ok(result);
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<ActionResult<GetMediaListResponse>> GetList(
        [FromQuery] GetMediaListRequest request,
        CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(request, cancellationToken);
        return Ok(result);
    }

    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<ActionResult<GetMediaDetailResponse>> GetDetail(
        Guid id,
        CancellationToken cancellationToken)
    {
        var request = new GetMediaDetailRequest { Id = id };
        var result = await _mediator.Send(request, cancellationToken);
        if (result == null) return NotFound();
        return Ok(result);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<UpdateMediaResponse>> Update(
        Guid id,
        [FromBody] UpdateMediaRequest request,
        CancellationToken cancellationToken)
    {
        if (id != request.Id) return BadRequest("ID mismatch.");

        try
        {
            var result = await _mediator.Send(request, cancellationToken);
            return Ok(result);
        }
        catch (InvalidOperationException ex)
        {
            return NotFound(ex.Message);
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(Guid id, CancellationToken cancellationToken)
    {
        var request = new DeleteMediaRequest { Id = id };
        try
        {
            var result = await _mediator.Send(request, cancellationToken);
            if (!result) return NotFound();
            return NoContent();
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
