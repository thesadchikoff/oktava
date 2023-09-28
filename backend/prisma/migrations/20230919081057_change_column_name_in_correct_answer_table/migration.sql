/*
  Warnings:

  - You are about to drop the column `questionId` on the `correct_answers` table. All the data in the column will be lost.
  - Added the required column `question_id` to the `correct_answers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "correct_answers" DROP CONSTRAINT "correct_answers_questionId_fkey";

-- AlterTable
ALTER TABLE "correct_answers" DROP COLUMN "questionId",
ADD COLUMN     "question_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "correct_answers" ADD CONSTRAINT "correct_answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
