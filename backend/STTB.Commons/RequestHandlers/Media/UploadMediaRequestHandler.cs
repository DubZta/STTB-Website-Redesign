using MediatR;
using STTB.Contracts.RequestModels.Media;
using STTB.Contracts.ResponseModels.Media;
using STTB.Entities;

namespace STTB.Commons.RequestHandlers.Media;

public class UploadMediaRequestHandler : IRequestHandler<UploadMediaRequest, UploadMediaResponse>
{
    private readonly ApplicationDbContext _dbContext;
    private readonly STTB.Commons.Services.ILocalStorageService _storageService;
    private readonly STTB.Commons.Services.IHtmlSanitizerService _htmlSanitizer;

    public UploadMediaRequestHandler(
        ApplicationDbContext dbContext,
        STTB.Commons.Services.ILocalStorageService storageService,
        STTB.Commons.Services.IHtmlSanitizerService htmlSanitizer)
    {
        _dbContext = dbContext;
        _storageService = storageService;
        _htmlSanitizer = htmlSanitizer;
    }

    public async Task<UploadMediaResponse> Handle(UploadMediaRequest request, CancellationToken cancellationToken)
    {
        // Require ILocalStorageService
        if (_storageService == null)
            throw new InvalidOperationException("Storage service is not configured.");
            
        // Use a generic IFormFile-like wrapper if not passed directly, but since we are handling streams directly from WebAPI we might need to modify this
        // Actually, the request model has ContentStream. Let's fix that based on LocalStorageService or modify it. 
        // Wait, I should just use the ContentStream directly inside the Handler or modify the Logic to save from Stream.
        
        // Let's modify the LocalStorageService to accept Streams or change the Handler. It's safer to just write the stream directly here for simplicity, or we can use the injected storage.
        // Actually, since this is an implementation task, I will just write the stream out to file system directly in the handler using WebRootPath.
        // I'll rewrite this whole handler properly.
        var uniqueFileName = $"{Guid.NewGuid()}{Path.GetExtension(request.Filename)}";
        var uploadFolder = Path.Combine(Environment.CurrentDirectory, "wwwroot", "uploads", "media");
        
        if (!Directory.Exists(uploadFolder))
            Directory.CreateDirectory(uploadFolder);
            
        var filePath = Path.Combine(uploadFolder, uniqueFileName);
        
        using (var fileStream = new FileStream(filePath, FileMode.Create))
        {
            await request.ContentStream.CopyToAsync(fileStream, cancellationToken);
        }
        
        var fileUrl = $"/uploads/media/{uniqueFileName}"; 

        var mediaEntity = new STTB.Entities.Media
        {
            Id = Guid.NewGuid(),
            Url = fileUrl,
            Filename = request.Filename,
            MimeType = request.MimeType,
            FileSize = request.FileSize,
            AltText = request.AltText,
            Title = request.Title,
            Slug = request.Slug,
            Category = request.Category,
            Content = _htmlSanitizer.Sanitize(request.Content),
            ThumbnailUrl = request.ThumbnailUrl,
            CreatedAt = DateTime.UtcNow,
            CreatedBy = "System"
        };

        _dbContext.Media.Add(mediaEntity);
        await _dbContext.SaveChangesAsync(cancellationToken);

        return new UploadMediaResponse
        {
            Id = mediaEntity.Id,
            Url = mediaEntity.Url
        };
    }
}
