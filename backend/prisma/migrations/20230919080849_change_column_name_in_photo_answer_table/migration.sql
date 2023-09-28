/*
  Warnings:

  - You are about to drop the column `questionId` on the `photo_answer` table. All the data in the column will be lost.
  - Added the required column `question_id` to the `photo_answer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "photo_answer" DROP CONSTRAINT "photo_answer_questionId_fkey";

-- AlterTable
ALTER TABLE "photo_answer" DROP COLUMN "questionId",
ADD COLUMN     "question_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "photo_answer" ADD CONSTRAINT "photo_answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
