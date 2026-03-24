using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace STTB.Entities.Migrations
{
    /// <inheritdoc />
    public partial class CleanMediaFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FileSize",
                table: "Media");

            migrationBuilder.DropColumn(
                name: "Filename",
                table: "Media");

            migrationBuilder.DropColumn(
                name: "MimeType",
                table: "Media");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "FileSize",
                table: "Media",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Filename",
                table: "Media",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MimeType",
                table: "Media",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);
        }
    }
}
