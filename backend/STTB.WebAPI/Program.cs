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
app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
    if (!userManager.Users.Any())
    {
        var admin = new ApplicationUser { UserName = "admin", Email = "admin@sttb.ac.id" };
        await userManager.CreateAsync(admin, "admin");
    }
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