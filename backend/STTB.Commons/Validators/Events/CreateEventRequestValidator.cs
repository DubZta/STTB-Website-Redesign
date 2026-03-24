using FluentValidation;
using STTB.Contracts.RequestModels.Events;
using STTB.Entities;

namespace STTB.Commons.Validators.Events;

public class CreateEventRequestValidator : AbstractValidator<CreateEventRequest>
{
    public CreateEventRequestValidator(ApplicationDbContext dbContext)
    {
        RuleFor(x => x.Title)
            .NotEmpty().WithMessage("Title is required.")
            .MaximumLength(255).WithMessage("Title cannot exceed 255 characters.");

        RuleFor(x => x.Slug)
            .NotEmpty().WithMessage("Slug is required.")
            .MaximumLength(255).WithMessage("Slug cannot exceed 255 characters.");

        RuleFor(x => x.Category)
            .NotEmpty().WithMessage("Category is required.")
            .MaximumLength(100).WithMessage("Category cannot exceed 100 characters.");

        RuleFor(x => x.EventDate)
            .NotEmpty().WithMessage("EventDate is required.");

        RuleFor(x => x.Status)
            .NotEmpty().WithMessage("Status is required.")
            .MaximumLength(50).WithMessage("Status cannot exceed 50 characters.")
            .Must(s => s == "draft" || s == "published").WithMessage("Status must be either 'draft' or 'published'.");

        RuleFor(x => x.ThumbnailUrl)
            .NotEmpty().WithMessage("ThumbnailUrl is required.")
            .MaximumLength(2048).WithMessage("ThumbnailUrl cannot exceed 2048 characters.");
    }
}
