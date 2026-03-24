using MediatR;
using STTB.Contracts.RequestModels.Events;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.Events;

public class DeleteEventRequestHandler : IRequestHandler<DeleteEventRequest, bool>
{
    private readonly ApplicationDbContext _dbContext;

    public DeleteEventRequestHandler(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<bool> Handle(DeleteEventRequest request, CancellationToken cancellationToken)
    {
        var entity = await _dbContext.Events.FindAsync(new object[] { request.Id }, cancellationToken);

        if (entity == null)
            return false;

        _dbContext.Events.Remove(entity);
        await _dbContext.SaveChangesAsync(cancellationToken);

        return true;
    }
}
