using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB.Contracts.RequestModels.News;
using STTB.Contracts.ResponseModels.News;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.News;

public class GetNewsDetailRequestHandler : IRequestHandler<GetNewsDetailRequest, GetNewsDetailResponse?>
{
    private readonly ApplicationDbContext _dbContext;

    public GetNewsDetailRequestHandler(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<GetNewsDetailResponse?> Handle(GetNewsDetailRequest request, CancellationToken cancellationToken)
    {
        var entity = await _dbContext.News
            .FirstOrDefaultAsync(n => n.Id == request.Id, cancellationToken);

        if (entity == null)
            return null;

        return new GetNewsDetailResponse
        {
            Id = entity.Id,
            Title = entity.Title,
            Slug = entity.Slug,
            Category = entity.Category,
            PublishedAt = entity.PublishedAt,
            Content = entity.Content,
            Status = entity.Status,
            ThumbnailUrl = entity.ThumbnailUrl
        };
    }
}
