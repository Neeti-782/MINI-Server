/*
  Warnings:

  - Changed the type of `type` on the `Questions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('YESNO', 'TEXT', 'RATING');

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "type",
ADD COLUMN     "type" "QuestionType" NOT NULL;
