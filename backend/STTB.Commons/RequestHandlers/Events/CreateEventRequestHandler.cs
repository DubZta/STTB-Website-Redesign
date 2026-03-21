using MediatR;
using STTB.Commons.Services;
using STTB.Contracts.RequestModels.Events;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.Events;

public class CreateEventRequestHandler : IRequestHandler<CreateEventRequest, Guid>
{
    private readonly ApplicationDbContext _dbContext;
    private readonly IHtmlSanitizerService _htmlSanitizer;

    public CreateEventRequestHandler(ApplicationDbContext dbContext, IHtmlSanitizerService htmlSanitizer)
    {
        _dbContext = dbContext;
        _htmlSanitizer = htmlSanitizer;
    }

    public async Task<Guid> Handle(CreateEventRequest request, CancellationToken cancellationToken)
    {
        var entity = new STTB.Entities.Event
        {
            Id = Guid.NewGuid(),
            Title = request.Title,
            Slug = request.Slug,
            Category = request.Category,
            EventDate = request.EventDate,
            Content = _htmlSanitizer.Sanitize(request.Content), // Sanitize HTML
            Status = request.Status,
            ThumbnailUrl = request.ThumbnailUrl,
            CreatedAt = DateTime.UtcNow,
            CreatedBy = "System"
        };

        _dbContext.Events.Add(entity);
        await _dbContext.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }
}
