using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB.Contracts.RequestModels.Media;
using STTB.Contracts.ResponseModels.Media;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.Media;

public class GetMediaDetailRequestHandler : IRequestHandler<GetMediaDetailRequest, GetMediaDetailResponse?>
{
    private readonly ApplicationDbContext _dbContext;

    public GetMediaDetailRequestHandler(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<GetMediaDetailResponse?> Handle(GetMediaDetailRequest request, CancellationToken cancellationToken)
    {
        var entity = await _dbContext.Media
            .FirstOrDefaultAsync(m => m.Id == request.Id, cancellationToken);

        if (entity == null)
            return null;

        return new GetMediaDetailResponse
        {
            Id = entity.Id,
            Title = entity.Title,
            Slug = entity.Slug,
            Category = entity.Category,
            Content = entity.Content,
            Url = entity.Url,
            ThumbnailUrl = entity.ThumbnailUrl,
            Filename = entity.Filename,
            MimeType = entity.MimeType,
            FileSize = entity.FileSize,
            CreatedAt = entity.CreatedAt
        };
    }
}
