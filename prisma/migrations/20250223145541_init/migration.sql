/*
  Warnings:

  - You are about to drop the column `tahun_akademik_id` on the `user` table. All the data in the column will be lost.
  - Added the required column `fakultas_id` to the `tahun_akademik` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_tahun_akademik_id_fkey`;

-- DropIndex
DROP INDEX `User_tahun_akademik_id_fkey` ON `user`;

-- AlterTable
ALTER TABLE `tahun_akademik` ADD COLUMN `fakultas_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `tahun_akademik_id`;

-- CreateTable
CREATE TABLE `Fakultas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode` VARCHAR(191) NOT NULL,
    `nama_fakultas` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tahun_akademik` ADD CONSTRAINT `tahun_akademik_fakultas_id_fkey` FOREIGN KEY (`fakultas_id`) REFERENCES `Fakultas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
