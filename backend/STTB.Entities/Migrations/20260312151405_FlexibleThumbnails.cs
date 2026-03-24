using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace STTB.Entities.Migrations
{
    /// <inheritdoc />
    public partial class FlexibleThumbnails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_Media_ThumbnailId",
                table: "Events");

            migrationBuilder.DropForeignKey(
                name: "FK_News_Media_ThumbnailId",
                table: "News");

            migrationBuilder.DropIndex(
                name: "IX_News_ThumbnailId",
                table: "News");

            migrationBuilder.DropIndex(
                name: "IX_Events_ThumbnailId",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "ThumbnailId",
                table: "News");

            migrationBuilder.DropColumn(
                name: "ThumbnailId",
                table: "Events");

            migrationBuilder.AddColumn<string>(
                name: "ThumbnailUrl",
                table: "News",
                type: "nvarchar(2048)",
                maxLength: 2048,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ThumbnailUrl",
                table: "Events",
                type: "nvarchar(2048)",
                maxLength: 2048,
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ThumbnailUrl",
                table: "News");

            migrationBuilder.DropColumn(
                name: "ThumbnailUrl",
                table: "Events");

            migrationBuilder.AddColumn<Guid>(
                name: "ThumbnailId",
                table: "News",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "ThumbnailId",
                table: "Events",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_News_ThumbnailId",
                table: "News",
                column: "ThumbnailId");

            migrationBuilder.CreateIndex(
                name: "IX_Events_ThumbnailId",
                table: "Events",
                column: "ThumbnailId");

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Media_ThumbnailId",
                table: "Events",
                column: "ThumbnailId",
                principalTable: "Media",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_News_Media_ThumbnailId",
                table: "News",
                column: "ThumbnailId",
                principalTable: "Media",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
