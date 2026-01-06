/*
  Warnings:

  - You are about to drop the column `badge_id` on the `Category` table. All the data in the column will be lost.
  - Added the required column `tier` to the `Badge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `badge_id` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `points_reward` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_badge_id_fkey";

-- AlterTable
ALTER TABLE "Badge" ADD COLUMN     "tier" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "badge_id";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "badge_id" BIGINT NOT NULL,
ADD COLUMN     "points_reward" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "Badge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
