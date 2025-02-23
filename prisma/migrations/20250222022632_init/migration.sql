/*
  Warnings:

  - Added the required column `tahun_akademik_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `tahun_akademik_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_tahun_akademik_id_fkey` FOREIGN KEY (`tahun_akademik_id`) REFERENCES `tahun_akademik`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
