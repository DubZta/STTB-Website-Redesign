using FluentValidation;
using STTB.Contracts.RequestModels.Media;

namespace STTB.Commons.Validators.Media;

public class UploadMediaRequestValidator : AbstractValidator<UploadMediaRequest>
{
    public UploadMediaRequestValidator()
    {
        // File fields are now optional - callers can POST metadata without a file
        RuleFor(x => x.Filename)
            .MaximumLength(255).WithMessage("Filename cannot exceed 255 characters.");

        RuleFor(x => x.MimeType)
            .MaximumLength(100).WithMessage("MimeType cannot exceed 100 characters.");

        RuleFor(x => x.AltText)
            .MaximumLength(255).WithMessage("AltText cannot exceed 255 characters.");

        // Content metadata fields
        RuleFor(x => x.Title)
            .MaximumLength(255).WithMessage("Title must not exceed 255 characters.");

        RuleFor(x => x.Slug)
            .MaximumLength(255).WithMessage("Slug must not exceed 255 characters.");

        RuleFor(x => x.Category)
            .MaximumLength(100).WithMessage("Category must not exceed 100 characters.");

        RuleFor(x => x.ThumbnailUrl)
            .MaximumLength(2048).WithMessage("Thumbnail URL must not exceed 2048 characters.");
    }
}
