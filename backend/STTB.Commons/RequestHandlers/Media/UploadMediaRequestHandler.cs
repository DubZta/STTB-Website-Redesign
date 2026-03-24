using MediatR;
using STTB.Contracts.RequestModels.Media;
using STTB.Contracts.ResponseModels.Media;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.Media;

public class UploadMediaRequestHandler : IRequestHandler<UploadMediaRequest, UploadMediaResponse>
{
    private readonly ApplicationDbContext _dbContext;
    private readonly STTB.Commons.Services.IHtmlSanitizerService _htmlSanitizer;

    public UploadMediaRequestHandler(
        ApplicationDbContext dbContext,
        STTB.Commons.Services.IHtmlSanitizerService htmlSanitizer)
    {
        _dbContext = dbContext;
        _htmlSanitizer = htmlSanitizer;
    }

    public async Task<UploadMediaResponse> Handle(UploadMediaRequest request, CancellationToken cancellationToken)
    {
        var mediaEntity = new STTB.Entities.Media
        {
            Id = Guid.NewGuid(),
            Url = request.Url,
            Title = request.Title,
            Slug = request.Slug,
            Category = request.Category,
            Content = _htmlSanitizer.Sanitize(request.Content),
            ThumbnailUrl = request.ThumbnailUrl,
            AltText = request.AltText,
            CreatedBy = "System", // TODO: Current User
            CreatedAt = DateTime.UtcNow
        };

        _dbContext.Media.Add(mediaEntity);
        await _dbContext.SaveChangesAsync(cancellationToken);

        return new UploadMediaResponse
        {
            Id = mediaEntity.Id,
            Url = mediaEntity.Url
        };
    }
}
