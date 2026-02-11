-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "ques" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);
