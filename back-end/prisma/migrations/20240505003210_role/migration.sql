-- AlterTable
ALTER TABLE `user` ADD COLUMN `isClient` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER';
