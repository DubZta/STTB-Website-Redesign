using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB.Contracts.RequestModels.Events;
using STTB.Contracts.ResponseModels.Events;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.Events;

public class GetEventListRequestHandler : IRequestHandler<GetEventListRequest, GetEventListResponse>
{
    private readonly ApplicationDbContext _dbContext;

    public GetEventListRequestHandler(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<GetEventListResponse> Handle(GetEventListRequest request, CancellationToken cancellationToken)
    {
        var query = _dbContext.Events.AsQueryable();

        if (!string.IsNullOrWhiteSpace(request.Search))
        {
            query = query.Where(e => e.Title.Contains(request.Search));
        }

        if (!string.IsNullOrWhiteSpace(request.Category))
        {
            query = query.Where(e => e.Category == request.Category);
        }

        if (!string.IsNullOrWhiteSpace(request.Status))
        {
            query = query.Where(e => e.Status == request.Status);
        }

        var totalCount = await query.CountAsync(cancellationToken);

        var items = await query
            // Typically sort upcoming events descending
            .OrderByDescending(e => e.EventDate)
            .Skip((request.Page - 1) * request.PageSize)
            .Take(request.PageSize)
            .Select(e => new EventListItem
            {
                Id = e.Id,
                Title = e.Title,
                Slug = e.Slug,
                Category = e.Category,
                EventDate = e.EventDate,
                EventEndDate = e.EventEndDate,
                Status = e.Status,
                ThumbnailUrl = e.ThumbnailUrl
            })
            .ToListAsync(cancellationToken);

        return new GetEventListResponse
        {
            Items = items,
            TotalCount = totalCount
        };
    }
}
