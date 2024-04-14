/*
  Warnings:

  - Added the required column `user_image` to the `AnimeComment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `animecomment` ADD COLUMN `user_image` VARCHAR(191) NOT NULL;
