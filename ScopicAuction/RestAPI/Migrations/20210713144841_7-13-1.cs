using Microsoft.EntityFrameworkCore.Migrations;

namespace RestAPI.Migrations
{
    public partial class _7131 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "lastbiduserid",
                table: "Bid",
                newName: "LastBidUserId");

            migrationBuilder.AddColumn<int>(
                name: "BidAmount",
                table: "User",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BidAmount",
                table: "User");

            migrationBuilder.RenameColumn(
                name: "LastBidUserId",
                table: "Bid",
                newName: "lastbiduserid");
        }
    }
}
