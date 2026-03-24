using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace STTB.Entities.Migrations
{
    /// <inheritdoc />
    public partial class MediaContentFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Media",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "Media",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Slug",
                table: "Media",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ThumbnailUrl",
                table: "Media",
                type: "nvarchar(2048)",
                maxLength: 2048,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Media",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_Media_Slug",
                table: "Media",
                column: "Slug",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Media_Slug",
                table: "Media");

            migrationBuilder.DropColumn(
                name: "Category",
                table: "Media");

            migrationBuilder.DropColumn(
                name: "Content",
                table: "Media");

            migrationBuilder.DropColumn(
                name: "Slug",
                table: "Media");

            migrationBuilder.DropColumn(
                name: "ThumbnailUrl",
                table: "Media");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Media");
        }
    }
}
