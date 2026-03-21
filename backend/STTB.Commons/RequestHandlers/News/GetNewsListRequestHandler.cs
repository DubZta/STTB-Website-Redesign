using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB.Contracts.RequestModels.News;
using STTB.Contracts.ResponseModels.News;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.News;

public class GetNewsListRequestHandler : IRequestHandler<GetNewsListRequest, GetNewsListResponse>
{
    private readonly ApplicationDbContext _dbContext;

    public GetNewsListRequestHandler(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<GetNewsListResponse> Handle(GetNewsListRequest request, CancellationToken cancellationToken)
    {
        var query = _dbContext.News.AsQueryable();

        if (!string.IsNullOrWhiteSpace(request.Search))
        {
            query = query.Where(n => n.Title.Contains(request.Search));
        }

        if (!string.IsNullOrWhiteSpace(request.Category))
        {
            query = query.Where(n => n.Category == request.Category);
        }

        if (!string.IsNullOrWhiteSpace(request.Status))
        {
            query = query.Where(n => n.Status == request.Status);
        }

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .OrderByDescending(n => n.PublishedAt)
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .Select(n => new NewsListItem
            {
                Id = n.Id,
                Title = n.Title,
                Slug = n.Slug,
                Category = n.Category,
                PublishedAt = n.PublishedAt,
                Status = n.Status,
                ThumbnailUrl = n.ThumbnailUrl
            })
            .ToListAsync(cancellationToken);

        return new GetNewsListResponse
        {
            Items = items,
            TotalCount = totalCount
        };
    }
}
