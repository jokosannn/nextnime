-- CreateTable
CREATE TABLE `AnimeCollection` (
    `id` VARCHAR(191) NOT NULL,
    `anime_mal_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AnimeCollection_user_email_anime_mal_id_key`(`user_email`, `anime_mal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MangaCollection` (
    `id` VARCHAR(191) NOT NULL,
    `anime_mal_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `MangaCollection_user_email_anime_mal_id_key`(`user_email`, `anime_mal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
