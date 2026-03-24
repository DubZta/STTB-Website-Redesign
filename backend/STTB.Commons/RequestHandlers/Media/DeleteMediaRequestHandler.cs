using MediatR;
using Microsoft.EntityFrameworkCore;
using STTB.Contracts.RequestModels.Media;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.Media;

public class DeleteMediaRequestHandler : IRequestHandler<DeleteMediaRequest, bool>
{
    private readonly ApplicationDbContext _dbContext;

    public DeleteMediaRequestHandler(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<bool> Handle(DeleteMediaRequest request, CancellationToken cancellationToken)
    {
        var media = await _dbContext.Media
            .FirstOrDefaultAsync(m => m.Id == request.Id, cancellationToken);

        if (media == null)
            return false;

        // Security / Integrity Check: Prevent deletion if URL is used
        var isUsedInNews = await _dbContext.News.AnyAsync(n => n.ThumbnailUrl == media.Url, cancellationToken);
        var isUsedInEvents = await _dbContext.Events.AnyAsync(e => e.ThumbnailUrl == media.Url, cancellationToken);

        if (isUsedInNews || isUsedInEvents)
        {
            throw new InvalidOperationException("Cannot delete media because its URL is currently used as a thumbnail in News or Events.");
        }

        _dbContext.Media.Remove(media);
        await _dbContext.SaveChangesAsync(cancellationToken);

        // Note: Actual S3 / Local file deletion logic should go here

        return true;
    }
}
