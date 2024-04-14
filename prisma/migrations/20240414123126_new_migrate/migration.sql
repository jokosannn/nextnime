-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "username" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimeCollection" (
    "id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "anime_title" TEXT,
    "anime_image" TEXT,

    CONSTRAINT "AnimeCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MangaCollection" (
    "id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "manga_mal_id" TEXT NOT NULL,
    "manga_title" TEXT,
    "manga_image" TEXT,

    CONSTRAINT "MangaCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimeComment" (
    "id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_image" TEXT NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "AnimeComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MangaComment" (
    "id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_image" TEXT NOT NULL,
    "manga_mal_id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "manga_title" TEXT NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "MangaComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AnimeCollection_user_email_anime_mal_id_key" ON "AnimeCollection"("user_email", "anime_mal_id");

-- CreateIndex
CREATE UNIQUE INDEX "MangaCollection_user_email_manga_mal_id_key" ON "MangaCollection"("user_email", "manga_mal_id");
