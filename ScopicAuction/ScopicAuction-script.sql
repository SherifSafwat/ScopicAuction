USE [master]
GO
/****** Object:  Database [ScopicAuction]    Script Date: 7/15/2021 7:06:15 PM ******/
CREATE DATABASE [ScopicAuction]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ScopicAuction', FILENAME = N'C:\Users\home\ScopicAuction.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ScopicAuction_log', FILENAME = N'C:\Users\home\ScopicAuction_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ScopicAuction] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ScopicAuction].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ScopicAuction] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ScopicAuction] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ScopicAuction] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ScopicAuction] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ScopicAuction] SET ARITHABORT OFF 
GO
ALTER DATABASE [ScopicAuction] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [ScopicAuction] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ScopicAuction] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ScopicAuction] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ScopicAuction] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ScopicAuction] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ScopicAuction] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ScopicAuction] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ScopicAuction] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ScopicAuction] SET  ENABLE_BROKER 
GO
ALTER DATABASE [ScopicAuction] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ScopicAuction] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ScopicAuction] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ScopicAuction] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ScopicAuction] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ScopicAuction] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [ScopicAuction] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ScopicAuction] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ScopicAuction] SET  MULTI_USER 
GO
ALTER DATABASE [ScopicAuction] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ScopicAuction] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ScopicAuction] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ScopicAuction] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ScopicAuction] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ScopicAuction] SET QUERY_STORE = OFF
GO
USE [ScopicAuction]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [ScopicAuction]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 7/15/2021 7:06:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bid]    Script Date: 7/15/2021 7:06:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bid](
	[BidId] [int] IDENTITY(1,1) NOT NULL,
	[ItemId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[Amount] [real] NOT NULL,
	[Auto] [bit] NOT NULL,
	[LastBidUserId] [int] NOT NULL,
 CONSTRAINT [PK_Bid] PRIMARY KEY CLUSTERED 
(
	[BidId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bot]    Script Date: 7/15/2021 7:06:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bot](
	[BotId] [int] IDENTITY(1,1) NOT NULL,
	[ItemId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[ClosedBotItem] [bit] NOT NULL,
	[ClosedItem] [bit] NOT NULL,
 CONSTRAINT [PK_Bot] PRIMARY KEY CLUSTERED 
(
	[BotId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Item]    Script Date: 7/15/2021 7:06:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Item](
	[ItemId] [int] IDENTITY(1,1) NOT NULL,
	[ItemName] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[Price] [real] NOT NULL,
	[ClosedItem] [bit] NOT NULL,
	[CloseDate] [real] NULL,
	[LastUserId] [int] NOT NULL,
 CONSTRAINT [PK_Item] PRIMARY KEY CLUSTERED 
(
	[ItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 7/15/2021 7:06:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](max) NULL,
	[RoleName] [nvarchar](max) NULL,
	[BidAmount] [int] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210712144723_7-12-1', N'5.0.7')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210712161941_7-12-2', N'5.0.7')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210712162030_7-12-3', N'5.0.7')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210713144841_7-13-1', N'5.0.7')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210714140700_7-14-1', N'5.0.7')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210714225124_15-7-1', N'5.0.7')
GO
SET IDENTITY_INSERT [dbo].[Bot] ON 

INSERT [dbo].[Bot] ([BotId], [ItemId], [UserId], [ClosedBotItem], [ClosedItem]) VALUES (1, 5, 1, 0, 0)
INSERT [dbo].[Bot] ([BotId], [ItemId], [UserId], [ClosedBotItem], [ClosedItem]) VALUES (2, 5, 1, 0, 0)
INSERT [dbo].[Bot] ([BotId], [ItemId], [UserId], [ClosedBotItem], [ClosedItem]) VALUES (1002, 5, 0, 0, 0)
SET IDENTITY_INSERT [dbo].[Bot] OFF
GO
SET IDENTITY_INSERT [dbo].[Item] ON 

INSERT [dbo].[Item] ([ItemId], [ItemName], [Description], [Price], [ClosedItem], [CloseDate], [LastUserId]) VALUES (4, N'item 1', N'desc 1', 11, 0, 9999, 0)
INSERT [dbo].[Item] ([ItemId], [ItemName], [Description], [Price], [ClosedItem], [CloseDate], [LastUserId]) VALUES (5, N'item 2', N'desc 2', 22, 0, 155554, 1)
INSERT [dbo].[Item] ([ItemId], [ItemName], [Description], [Price], [ClosedItem], [CloseDate], [LastUserId]) VALUES (7, N'item 3', N'desc 3', 33, 0, 1E+08, 1)
INSERT [dbo].[Item] ([ItemId], [ItemName], [Description], [Price], [ClosedItem], [CloseDate], [LastUserId]) VALUES (9, N'item 4', N'desc 4', 44, 0, 1E+08, 1)
INSERT [dbo].[Item] ([ItemId], [ItemName], [Description], [Price], [ClosedItem], [CloseDate], [LastUserId]) VALUES (10, N'item 5', N'desc 5', 55, 0, 1E+08, 1)
INSERT [dbo].[Item] ([ItemId], [ItemName], [Description], [Price], [ClosedItem], [CloseDate], [LastUserId]) VALUES (11, N'item 6', N'desc 6', 66, 0, 1E+08, 1)
INSERT [dbo].[Item] ([ItemId], [ItemName], [Description], [Price], [ClosedItem], [CloseDate], [LastUserId]) VALUES (12, N'item 7', N'desc 7', 777, 0, 1E+08, 1)
INSERT [dbo].[Item] ([ItemId], [ItemName], [Description], [Price], [ClosedItem], [CloseDate], [LastUserId]) VALUES (13, N'item 8', N'desc 8', 88, 0, 1E+08, 1)
INSERT [dbo].[Item] ([ItemId], [ItemName], [Description], [Price], [ClosedItem], [CloseDate], [LastUserId]) VALUES (14, N'item 9', N'desc 9', 999, 0, 1E+08, 1)
INSERT [dbo].[Item] ([ItemId], [ItemName], [Description], [Price], [ClosedItem], [CloseDate], [LastUserId]) VALUES (15, N'item 10', N'desc 10', 24, 0, 1E+08, 1)
INSERT [dbo].[Item] ([ItemId], [ItemName], [Description], [Price], [ClosedItem], [CloseDate], [LastUserId]) VALUES (16, N'item 11', N'desc 11', 2, 0, 1E+08, 1)
SET IDENTITY_INSERT [dbo].[Item] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserId], [UserName], [RoleName], [BidAmount]) VALUES (1, N'User1', NULL, 55)
INSERT [dbo].[User] ([UserId], [UserName], [RoleName], [BidAmount]) VALUES (2, N'User2', NULL, 0)
INSERT [dbo].[User] ([UserId], [UserName], [RoleName], [BidAmount]) VALUES (3, N'User3', NULL, 0)
SET IDENTITY_INSERT [dbo].[User] OFF
GO
ALTER TABLE [dbo].[Bid] ADD  DEFAULT ((0)) FOR [LastBidUserId]
GO
ALTER TABLE [dbo].[Item] ADD  DEFAULT ((0)) FOR [LastUserId]
GO
ALTER TABLE [dbo].[User] ADD  DEFAULT ((0)) FOR [BidAmount]
GO
USE [master]
GO
ALTER DATABASE [ScopicAuction] SET  READ_WRITE 
GO
