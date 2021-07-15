using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RestAPI.Migrations
{
    public partial class _7141 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            /*migrationBuilder.AlterColumn<float>(
                name: "CloseDate",
                table: "Item",
                type: "real",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");*/
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "CloseDate",
                table: "Item",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");
        }
    }
}
