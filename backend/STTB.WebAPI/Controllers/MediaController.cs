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
    [Consumes("multipart/form-data")]
    public async Task<ActionResult<UploadMediaResponse>> Upload(
        [FromForm] UploadMediaDto dto,
        CancellationToken cancellationToken)
    {
        // File is optional – callers can upload metadata without a file
        Stream fileStream = dto.File != null ? dto.File.OpenReadStream() : Stream.Null;
        using var _ = fileStream;

        var request = new UploadMediaRequest
        {
            Filename = dto.File?.FileName ?? string.Empty,
            MimeType = dto.File?.ContentType ?? string.Empty,
            FileSize = dto.File?.Length ?? 0,
            ContentStream = fileStream,
            AltText = dto.AltText,
            Title = dto.Title,
            Slug = dto.Slug,
            Category = dto.Category,
            Content = dto.Content,
            ThumbnailUrl = dto.ThumbnailUrl
        };

        var result = await _mediator.Send(request, cancellationToken);
        return Ok(result);
    }

    public class UploadMediaDto
    {
        public IFormFile? File { get; set; }
        public string? AltText { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Slug { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string ThumbnailUrl { get; set; } = string.Empty;
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
