/*
  Warnings:

  - Added the required column `timer` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tests" ADD COLUMN     "timer" TIMESTAMP(3) NOT NULL;
