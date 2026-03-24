using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using System.Security.Claims;
using STTB.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using FluentValidation;
var builder = WebApplication.CreateBuilder(args);

// Kunci tunggal untuk seluruh aplikasi
var key = Encoding.UTF8.GetBytes("SuperSecretTempKeyForTestingLocalApi12345!");

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

// Configure ApplicationDbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// MediatR & FluentValidation (from STTB.Commons)
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(STTB.Commons.IAssemblyMarker).Assembly));
builder.Services.AddValidatorsFromAssembly(typeof(STTB.Commons.IAssemblyMarker).Assembly);

// Add Storage and HtmlSanitizer
builder.Services.AddScoped<STTB.Commons.Services.ILocalStorageService, STTB.Commons.Services.LocalStorageService>();
builder.Services.AddScoped<Ganss.Xss.IHtmlSanitizer, Ganss.Xss.HtmlSanitizer>();
builder.Services.AddScoped<STTB.Commons.Services.IHtmlSanitizerService, STTB.Commons.Services.HtmlSanitizerService>();

builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options => {
    options.Password.RequireDigit = false;
    options.Password.RequiredLength = 4;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequireLowercase = false;
    
    // Gunakan nama claim standar yang sama dengan JWT
    options.ClaimsIdentity.UserIdClaimType = "sub";
    options.ClaimsIdentity.UserNameClaimType = "name";
    options.ClaimsIdentity.RoleClaimType = "role";
})
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

builder.Services.AddSwaggerGen(c =>
{
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme { Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "Bearer" } },
            new string[] {}
        }
    });
});

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.MapInboundClaims = false; // Prevents .NET from mapping 'role' to a long URI
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = "STTB.Backend",
            ValidateAudience = true,
            ValidAudience = "STTB.Frontend",
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            NameClaimType = "name",
            RoleClaimType = "role"
        };

        options.Events = new JwtBearerEvents
        {
            OnMessageReceived = context =>
            {
                var authHeader = context.Request.Headers["Authorization"].ToString();
                if (string.IsNullOrEmpty(authHeader))
                {
                    Console.WriteLine("[AUTH] No Authorization header found.");
                }
                else
                {
                    Console.WriteLine($"[AUTH] Header found: {authHeader.Substring(0, Math.Min(20, authHeader.Length))}...");
                }
                return Task.CompletedTask;
            },
            OnAuthenticationFailed = context =>
            {
                Console.WriteLine($"[AUTH] Authentication failed: {context.Exception.Message}");
                if (context.Exception.InnerException != null)
                {
                    Console.WriteLine($"[AUTH] Inner error: {context.Exception.InnerException.Message}");
                }
                return Task.CompletedTask;
            },
            OnTokenValidated = context =>
            {
                Console.WriteLine("[AUTH] Token validated successfully.");
                
                // Role Bridge: Ensure 'Admin' role is present in the Principal
                if (context.Principal?.Identity is ClaimsIdentity identity)
                {
                    if (!identity.HasClaim(c => (c.Type == "role" || c.Type == ClaimTypes.Role) && c.Value == "Admin"))
                    {
                        identity.AddClaim(new Claim("role", "Admin"));
                        identity.AddClaim(new Claim(ClaimTypes.Role, "Admin"));
                        Console.WriteLine("[AUTH] Role Bridge: Manually added 'Admin' role to principal.");
                    }
                }

                var claims = context.Principal?.Claims.Select(c => $"{c.Type}: {c.Value}");
                if (claims != null)
                {
                    Console.WriteLine($"[AUTH] Claims: {string.Join(", ", claims)}");
                }
                return Task.CompletedTask;
            }
        };
    });

builder.Services.AddAuthorization();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("AllowReact");
app.UseAuthentication();
app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
    if (!await roleManager.RoleExistsAsync("Admin"))
    {
        await roleManager.CreateAsync(new IdentityRole("Admin"));
    }

    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
    if (!userManager.Users.Any())
    {
        var admin = new ApplicationUser { UserName = "admin", Email = "admin@sttb.ac.id" };
        var result = await userManager.CreateAsync(admin, "admin");
        if (result.Succeeded)
        {
            await userManager.AddToRoleAsync(admin, "Admin");
        }
    }

    var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    if (!dbContext.News.Any())
    {
        dbContext.News.AddRange(
            new STTB.Entities.News { Title = "Welcome to STTB", Slug = "welcome-to-sttb", Category = "general", Content = "<p>Welcome to STTB new website. Discover our programs, campus life, and more.</p>", Status = "published", ThumbnailUrl = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop", CreatedAt = DateTime.UtcNow, CreatedBy = "System" },
            new STTB.Entities.News { Title = "Campus Life Update", Slug = "campus-life", Category = "campus", Content = "<p>Upcoming campus events and student activities.</p>", Status = "published", ThumbnailUrl = "https://images.unsplash.com/photo-1523580846011-d3a5ce2522eb?w=800&auto=format&fit=crop", CreatedAt = DateTime.UtcNow, CreatedBy = "System" },
            new STTB.Entities.News { Title = "New Infrastructure", Slug = "new-infrastructure", Category = "facility", Content = "<p>We have opened a new IT laboratory for students.</p>", Status = "published", ThumbnailUrl = "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&auto=format&fit=crop", CreatedAt = DateTime.UtcNow, CreatedBy = "System" }
        );
    }
    if (!dbContext.Events.Any())
    {
        dbContext.Events.AddRange(
            new STTB.Entities.Event { Title = "Open House 2026", Slug = "open-house", Category = "general", Content = "<p>Join us for our annual Open House to see our facilities.</p>", EventDate = DateTime.UtcNow.AddDays(7), Status = "published", ThumbnailUrl = "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop", CreatedAt = DateTime.UtcNow, CreatedBy = "System" },
            new STTB.Entities.Event { Title = "Tech Seminar", Slug = "tech-seminar", Category = "technology", Content = "<p>Learn about the latest trends in Artificial Intelligence.</p>", EventDate = DateTime.UtcNow.AddDays(14), Status = "published", ThumbnailUrl = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop", CreatedAt = DateTime.UtcNow, CreatedBy = "System" }
        );
    }
    if (!dbContext.Media.Any())
    {
        dbContext.Media.AddRange(
            new STTB.Entities.Media { Title = "Sample Promotional Video", Slug = "sample-video", Category = "video", Url = "https://www.w3schools.com/html/mov_bbb.mp4", Content = "Short promotional video", CreatedAt = DateTime.UtcNow, CreatedBy = "System", ThumbnailUrl = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop" },
            new STTB.Entities.Media { Title = "Campus Front View", Slug = "campus-front", Category = "photo", Url = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop", Content = "HD image of the main campus building", CreatedAt = DateTime.UtcNow, CreatedBy = "System", ThumbnailUrl = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&auto=format&fit=crop" },
            new STTB.Entities.Media { Title = "Student Guide 2026", Slug = "student-guide-2026", Category = "book", Url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", Content = "PDF Guide for all incoming students", CreatedAt = DateTime.UtcNow, CreatedBy = "System", ThumbnailUrl = "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&auto=format&fit=crop" }
        );
    }
    await dbContext.SaveChangesAsync();
}

app.MapGet("/api/dev/me", (ClaimsPrincipal user) =>
{
    return Results.Ok(new
    {
        IsAuthenticated = user.Identity?.IsAuthenticated ?? false,
        Name = user.Identity?.Name,
        Claims = user.Claims.Select(c => new { c.Type, c.Value }),
        Roles = user.Claims.Where(c => c.Type == "role" || c.Type == ClaimTypes.Role).Select(c => c.Value)
    });
});

app.MapPost("/api/dev/token", () =>
{
    var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
    var descriptor = new SecurityTokenDescriptor
    {
        Issuer = "STTB.Backend",
        Audience = "STTB.Frontend",
        Subject = new ClaimsIdentity(new[] { 
            new Claim("role", "Admin"), 
            new Claim("name", "TestAdmin")
        }),
        Expires = DateTime.UtcNow.AddYears(1),
        SigningCredentials = new SigningCredentials(
            new SymmetricSecurityKey(key), 
            SecurityAlgorithms.HmacSha256Signature
        )
    };
    return Results.Ok(new { token = tokenHandler.WriteToken(tokenHandler.CreateToken(descriptor)) });
});

app.Run();