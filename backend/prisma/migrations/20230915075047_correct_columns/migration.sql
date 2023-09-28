/*
  Warnings:

  - Added the required column `question_description` to the `questions` table without a default value. This is not possible if the table is not empty.
  - Made the column `question_name` on table `questions` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "TESTTYPE" AS ENUM ('Scenario', 'Standard');

-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "question_description" TEXT NOT NULL,
ADD COLUMN     "type" "TESTTYPE" NOT NULL DEFAULT 'Standard',
ALTER COLUMN "question_name" SET NOT NULL;

-- CreateTable
CREATE TABLE "photo_answer" (
    "id" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "photo_answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "photo_answer" ADD CONSTRAINT "photo_answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
