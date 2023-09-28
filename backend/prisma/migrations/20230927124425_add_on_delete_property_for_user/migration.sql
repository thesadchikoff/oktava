-- DropForeignKey
ALTER TABLE "testing_sessions" DROP CONSTRAINT "testing_sessions_user_id_fkey";

-- AddForeignKey
ALTER TABLE "testing_sessions" ADD CONSTRAINT "testing_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
