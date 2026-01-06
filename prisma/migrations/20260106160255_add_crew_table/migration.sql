/*
  Warnings:

  - You are about to drop the column `vaisseau` on the `User` table. All the data in the column will be lost.
  - Added the required column `rank` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "vaisseau",
ADD COLUMN     "crewId" BIGINT,
ADD COLUMN     "rank" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Crew" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "vaisseau" TEXT NOT NULL,

    CONSTRAINT "Crew_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_crewId_fkey" FOREIGN KEY ("crewId") REFERENCES "Crew"("id") ON DELETE SET NULL ON UPDATE CASCADE;
