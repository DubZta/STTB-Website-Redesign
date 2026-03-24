using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using STTB.Contracts.RequestModels.News;
using STTB.Contracts.ResponseModels.News;

namespace STTB.WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsController : ControllerBase
{
    private readonly IMediator _mediator;

    public NewsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    [AllowAnonymous]
    public async Task<ActionResult<GetNewsListResponse>> GetList([FromQuery] GetNewsListRequest request, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(request, cancellationToken);
        return Ok(result);
    }

    [HttpGet("{id}")]
    [AllowAnonymous]
    public async Task<ActionResult<GetNewsDetailResponse>> GetDetail(Guid id, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(new GetNewsDetailRequest { Id = id }, cancellationToken);
        if (result == null) return NotFound();
        return Ok(result);
    }

    [HttpPost]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
    public async Task<ActionResult<Guid>> Create([FromBody] CreateNewsRequest request, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(request, cancellationToken);
        return CreatedAtAction(nameof(GetDetail), new { id = result }, result);
    }

    [HttpPut("{id}")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
    public async Task<ActionResult> Update(Guid id, [FromBody] UpdateNewsRequest request, CancellationToken cancellationToken)
    {
        if (id != request.Id) return BadRequest("ID mismatch");

        var result = await _mediator.Send(request, cancellationToken);
        if (!result) return NotFound();
        return NoContent();
    }

    [HttpDelete("{id}")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
    public async Task<ActionResult> Delete(Guid id, CancellationToken cancellationToken)
    {
        var result = await _mediator.Send(new DeleteNewsRequest { Id = id }, cancellationToken);
        if (!result) return NotFound();
        return NoContent();
    }
}
