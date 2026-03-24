using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB.Contracts.RequestModels.Events;
using STTB.Contracts.ResponseModels.Events;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.Events;

public class GetEventDetailRequestHandler : IRequestHandler<GetEventDetailRequest, GetEventDetailResponse?>
{
    private readonly ApplicationDbContext _dbContext;

    public GetEventDetailRequestHandler(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<GetEventDetailResponse?> Handle(GetEventDetailRequest request, CancellationToken cancellationToken)
    {
        var entity = await _dbContext.Events
            .FirstOrDefaultAsync(e => e.Id == request.Id, cancellationToken);

        if (entity == null)
            return null;

        return new GetEventDetailResponse
        {
            Id = entity.Id,
            Title = entity.Title,
            Slug = entity.Slug,
            Category = entity.Category,
            EventDate = entity.EventDate,
            EventEndDate = entity.EventEndDate,
            Content = entity.Content,
            Status = entity.Status,
            ThumbnailUrl = entity.ThumbnailUrl
        };
    }
}
