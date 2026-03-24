using MediatR;
using STTB.Contracts.RequestModels.News;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.News;

public class DeleteNewsRequestHandler : IRequestHandler<DeleteNewsRequest, bool>
{
    private readonly ApplicationDbContext _dbContext;

    public DeleteNewsRequestHandler(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<bool> Handle(DeleteNewsRequest request, CancellationToken cancellationToken)
    {
        var entity = await _dbContext.News.FindAsync(new object[] { request.Id }, cancellationToken);

        if (entity == null)
            return false;

        _dbContext.News.Remove(entity);
        await _dbContext.SaveChangesAsync(cancellationToken);

        return true;
    }
}
