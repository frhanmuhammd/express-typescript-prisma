-- CreateTable
CREATE TABLE `tahun_akademik` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahun_mulai` VARCHAR(191) NOT NULL,
    `tahun_selesai` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
