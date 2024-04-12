/*
  Warnings:

  - You are about to drop the column `anime_image` on the `mangacollection` table. All the data in the column will be lost.
  - You are about to drop the column `anime_mal_id` on the `mangacollection` table. All the data in the column will be lost.
  - You are about to drop the column `anime_title` on the `mangacollection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_email,manga_mal_id]` on the table `MangaCollection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `manga_mal_id` to the `MangaCollection` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `MangaCollection_user_email_anime_mal_id_key` ON `mangacollection`;

-- AlterTable
ALTER TABLE `mangacollection` DROP COLUMN `anime_image`,
    DROP COLUMN `anime_mal_id`,
    DROP COLUMN `anime_title`,
    ADD COLUMN `manga_image` VARCHAR(191) NULL,
    ADD COLUMN `manga_mal_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `manga_title` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `MangaCollection_user_email_manga_mal_id_key` ON `MangaCollection`(`user_email`, `manga_mal_id`);
