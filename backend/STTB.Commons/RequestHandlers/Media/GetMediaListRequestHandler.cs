using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB.Contracts.RequestModels.Media;
using STTB.Contracts.ResponseModels.Media;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.Media;

public class GetMediaListRequestHandler : IRequestHandler<GetMediaListRequest, GetMediaListResponse>
{
    private readonly ApplicationDbContext _dbContext;

    public GetMediaListRequestHandler(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<GetMediaListResponse> Handle(GetMediaListRequest request, CancellationToken cancellationToken)
    {
        var query = _dbContext.Media.AsQueryable();

        if (!string.IsNullOrWhiteSpace(request.Search))
        {
            query = query.Where(m => 
                m.Title != null && m.Title.Contains(request.Search));
        }

        if (!string.IsNullOrWhiteSpace(request.Category))
        {
            query = query.Where(m => m.Category == request.Category);
        }

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            .OrderByDescending(m => m.CreatedAt)
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .Select(m => new MediaListItem
            {
                Id = m.Id,
                Title = m.Title,
                Slug = m.Slug,
                Category = m.Category,
                Url = m.Url,
                ThumbnailUrl = m.ThumbnailUrl,
                CreatedAt = m.CreatedAt
            })
            .ToListAsync(cancellationToken);

        return new GetMediaListResponse
        {
            Items = items,
            TotalCount = totalCount
        };
    }
}
