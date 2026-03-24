using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB.Commons.Services;
using STTB.Contracts.RequestModels.News;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.News;

public class UpdateNewsRequestHandler : IRequestHandler<UpdateNewsRequest, bool>
{
    private readonly ApplicationDbContext _dbContext;
    private readonly IHtmlSanitizerService _htmlSanitizer;

    public UpdateNewsRequestHandler(ApplicationDbContext dbContext, IHtmlSanitizerService htmlSanitizer)
    {
        _dbContext = dbContext;
        _htmlSanitizer = htmlSanitizer;
    }

    public async Task<bool> Handle(UpdateNewsRequest request, CancellationToken cancellationToken)
    {
        var entity = await _dbContext.News.FindAsync(new object[] { request.Id }, cancellationToken);

        if (entity == null)
            return false;

        entity.Title = request.Title;
        entity.Slug = request.Slug;
        entity.Category = request.Category;
        entity.PublishedAt = request.PublishedAt;
        entity.Content = _htmlSanitizer.Sanitize(request.Content);
        entity.Status = request.Status;
        entity.ThumbnailUrl = request.ThumbnailUrl;
        entity.UpdatedAt = DateTime.UtcNow;
        entity.UpdatedBy = "System";

        await _dbContext.SaveChangesAsync(cancellationToken);

        return true;
    }
}
