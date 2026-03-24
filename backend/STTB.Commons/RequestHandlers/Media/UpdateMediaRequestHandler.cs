using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB.Contracts.RequestModels.Media;
using STTB.Contracts.ResponseModels.Media;
using STTB.Entities;
using STTB.Commons.Services;

namespace STTB.Commons.RequestHandlers.Media;

public class UpdateMediaRequestHandler : IRequestHandler<UpdateMediaRequest, UpdateMediaResponse>
{
    private readonly ApplicationDbContext _dbContext;
    private readonly IHtmlSanitizerService _htmlSanitizer;

    public UpdateMediaRequestHandler(ApplicationDbContext dbContext, IHtmlSanitizerService htmlSanitizer)
    {
        _dbContext = dbContext;
        _htmlSanitizer = htmlSanitizer;
    }

    public async Task<UpdateMediaResponse> Handle(UpdateMediaRequest request, CancellationToken cancellationToken)
    {
        var media = await _dbContext.Media
            .FirstOrDefaultAsync(m => m.Id == request.Id, cancellationToken);

        if (media == null)
            throw new InvalidOperationException($"Media with ID {request.Id} not found.");

        media.Title = request.Title;
        media.Slug = request.Slug;
        media.Category = request.Category;
        media.Content = _htmlSanitizer.Sanitize(request.Content);
        media.Url = request.Url;
        media.ThumbnailUrl = request.ThumbnailUrl;
        
        media.UpdatedAt = DateTime.UtcNow;
        media.UpdatedBy = "System"; // TODO: Implement ICurrentUser context

        await _dbContext.SaveChangesAsync(cancellationToken);

        return new UpdateMediaResponse
        {
            Id = media.Id,
            Title = media.Title,
            Slug = media.Slug,
            Category = media.Category,
            Url = media.Url,
            ThumbnailUrl = media.ThumbnailUrl
        };
    }
}
