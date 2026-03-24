using MediatR;
using STTB.Commons.Services;
using STTB.Contracts.RequestModels.News;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.News;

public class CreateNewsRequestHandler : IRequestHandler<CreateNewsRequest, Guid>
{
    private readonly ApplicationDbContext _dbContext;
    private readonly IHtmlSanitizerService _htmlSanitizer;

    public CreateNewsRequestHandler(ApplicationDbContext dbContext, IHtmlSanitizerService htmlSanitizer)
    {
        _dbContext = dbContext;
        _htmlSanitizer = htmlSanitizer;
    }

    public async Task<Guid> Handle(CreateNewsRequest request, CancellationToken cancellationToken)
    {
        var entity = new STTB.Entities.News
        {
            Id = Guid.NewGuid(),
            Title = request.Title,
            Slug = request.Slug,
            Category = request.Category,
            PublishedAt = request.PublishedAt,
            Content = _htmlSanitizer.Sanitize(request.Content), // Sanitize HTML
            Status = request.Status,
            ThumbnailUrl = request.ThumbnailUrl,
            CreatedAt = DateTime.UtcNow,
            CreatedBy = "System"
        };

        _dbContext.News.Add(entity);
        await _dbContext.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }
}
