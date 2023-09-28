-- DropForeignKey
ALTER TABLE "correct_answers" DROP CONSTRAINT "correct_answers_question_id_fkey";

-- AddForeignKey
ALTER TABLE "correct_answers" ADD CONSTRAINT "correct_answers_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
