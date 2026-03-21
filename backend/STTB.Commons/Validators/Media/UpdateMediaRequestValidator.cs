using FluentValidation;
using STTB.Contracts.RequestModels.Media;

namespace STTB.Commons.Validators.Media;

public class UpdateMediaRequestValidator : AbstractValidator<UpdateMediaRequest>
{
    public UpdateMediaRequestValidator()
    {
        RuleFor(x => x.Id).NotEmpty().WithMessage("Media Id is required.");
        
        RuleFor(x => x.Title)
            .NotEmpty().WithMessage("Title is required.")
            .MaximumLength(255).WithMessage("Title must not exceed 255 characters.");

        RuleFor(x => x.Slug)
            .NotEmpty().WithMessage("Slug is required.")
            .MaximumLength(255).WithMessage("Slug must not exceed 255 characters.");

        RuleFor(x => x.Category)
            .MaximumLength(100).WithMessage("Category must not exceed 100 characters.");

        RuleFor(x => x.ThumbnailUrl)
            .MaximumLength(2048).WithMessage("Thumbnail URL must not exceed 2048 characters.");
    }
}
