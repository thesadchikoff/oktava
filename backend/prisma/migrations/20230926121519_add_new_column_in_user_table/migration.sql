/*
  Warnings:

  - You are about to drop the column `last_name` on the `users` table. All the data in the column will be lost.
  - Added the required column `company` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "last_name",
ADD COLUMN     "company" TEXT NOT NULL;
