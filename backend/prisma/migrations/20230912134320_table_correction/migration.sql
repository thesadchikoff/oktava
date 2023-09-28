/*
  Warnings:

  - You are about to drop the column `questionId` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `testId` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `testing_sessions` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `tests` table. All the data in the column will be lost.
  - Added the required column `question_id` to the `answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `testing_sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "answers" DROP CONSTRAINT "answers_questionId_fkey";

-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_testId_fkey";

-- DropForeignKey
ALTER TABLE "testing_sessions" DROP CONSTRAINT "testing_sessions_userId_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_categoryId_fkey";

-- AlterTable
ALTER TABLE "answers" DROP COLUMN "questionId",
ADD COLUMN     "question_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "is_hard" DROP NOT NULL;

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "testId",
ADD COLUMN     "test_id" TEXT;

-- AlterTable
ALTER TABLE "testing_sessions" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "categoryId",
ADD COLUMN     "category_id" TEXT NOT NULL,
ALTER COLUMN "timer" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "testing_sessions" ADD CONSTRAINT "testing_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_test_id_fkey" FOREIGN KEY ("test_id") REFERENCES "tests"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
