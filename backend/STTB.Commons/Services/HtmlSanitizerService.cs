using Ganss.Xss;

namespace STTB.Commons.Services;

public interface IHtmlSanitizerService
{
    string Sanitize(string html);
}

public class HtmlSanitizerService : IHtmlSanitizerService
{
    private readonly IHtmlSanitizer _sanitizer;

    public HtmlSanitizerService(IHtmlSanitizer sanitizer)
    {
        _sanitizer = sanitizer;
        
        // Ensure proper tags are allowed (e.g. for Rich Editor content)
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("a");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("img");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("b");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("i");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("strong");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("em");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("p");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("br");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("ul");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("ol");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("li");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("span");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("div");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("iframe"); // For Youtube
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("video");
        ((HtmlSanitizer)_sanitizer).AllowedTags.Add("source");
        
        ((HtmlSanitizer)_sanitizer).AllowedAttributes.Add("href");
        ((HtmlSanitizer)_sanitizer).AllowedAttributes.Add("src");
        ((HtmlSanitizer)_sanitizer).AllowedAttributes.Add("alt");
        ((HtmlSanitizer)_sanitizer).AllowedAttributes.Add("style");
        ((HtmlSanitizer)_sanitizer).AllowedAttributes.Add("class");
        ((HtmlSanitizer)_sanitizer).AllowedAttributes.Add("target");
        ((HtmlSanitizer)_sanitizer).AllowedAttributes.Add("allowfullscreen");
        ((HtmlSanitizer)_sanitizer).AllowedAttributes.Add("frameborder");
    }

    public string Sanitize(string html)
    {
        if (string.IsNullOrWhiteSpace(html))
            return string.Empty;

        return _sanitizer.Sanitize(html);
    }
}
