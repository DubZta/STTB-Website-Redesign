using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB.Commons.Services;
using STTB.Contracts.RequestModels.Events;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.Events;

public class UpdateEventRequestHandler : IRequestHandler<UpdateEventRequest, bool>
{
    private readonly ApplicationDbContext _dbContext;
    private readonly IHtmlSanitizerService _htmlSanitizer;

    public UpdateEventRequestHandler(ApplicationDbContext dbContext, IHtmlSanitizerService htmlSanitizer)
    {
        _dbContext = dbContext;
        _htmlSanitizer = htmlSanitizer;
    }

    public async Task<bool> Handle(UpdateEventRequest request, CancellationToken cancellationToken)
    {
        var entity = await _dbContext.Events.FindAsync(new object[] { request.Id }, cancellationToken);

        if (entity == null)
            return false;

        entity.Title = request.Title;
        entity.Slug = request.Slug;
        entity.Category = request.Category;
        entity.EventDate = request.EventDate;
        entity.EventEndDate = request.EventEndDate;
        entity.Content = _htmlSanitizer.Sanitize(request.Content);
        entity.Status = request.Status;
        entity.ThumbnailUrl = request.ThumbnailUrl;
        entity.UpdatedAt = DateTime.UtcNow;
        entity.UpdatedBy = "System";

        await _dbContext.SaveChangesAsync(cancellationToken);

        return true;
    }
}
