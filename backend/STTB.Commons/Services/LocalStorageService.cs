using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace STTB.Commons.Services;

public interface ILocalStorageService
{
    Task<string> SaveFileAsync(Stream fileStream, string filename, string folderPath, CancellationToken cancellationToken = default);
    bool DeleteFile(string fileUrl);
}

public class LocalStorageService : ILocalStorageService
{
    private readonly string _webRootPath;

    public LocalStorageService()
    {
        // By default, assume the web root is the "wwwroot" folder in the current directory
        _webRootPath = Path.Combine(Environment.CurrentDirectory, "wwwroot");
    }

    public async Task<string> SaveFileAsync(Stream fileStream, string filename, string folderPath, CancellationToken cancellationToken = default)
    {
        if (fileStream == null || fileStream.Length == 0)
            throw new ArgumentException("Invalid file stream");

        if (string.IsNullOrWhiteSpace(filename))
            throw new ArgumentException("Invalid filename");

        var uploadFolder = Path.Combine(_webRootPath, folderPath.TrimStart('/').Replace('/', '\\'));

        if (!Directory.Exists(uploadFolder))
        {
            Directory.CreateDirectory(uploadFolder);
        }

        var fileExtension = Path.GetExtension(filename);
        var uniqueFileName = $"{Guid.NewGuid()}{fileExtension}";
        var filePath = Path.Combine(uploadFolder, uniqueFileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await fileStream.CopyToAsync(stream, cancellationToken);
        }

        return $"/{folderPath.Trim('/')}/{uniqueFileName}";
    }

    public bool DeleteFile(string fileUrl)
    {
        if (string.IsNullOrWhiteSpace(fileUrl)) return false;

        var filePath = Path.Combine(_webRootPath, fileUrl.TrimStart('/').Replace('/', '\\'));

        if (File.Exists(filePath))
        {
            File.Delete(filePath);
            return true;
        }

        return false;
    }
}
