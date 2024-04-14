/*
  Warnings:

  - You are about to drop the `reply` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `reply` DROP FOREIGN KEY `Reply_animeCommentId_fkey`;

-- DropTable
DROP TABLE `reply`;
