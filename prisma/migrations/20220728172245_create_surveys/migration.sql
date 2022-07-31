/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__SurveyToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_SurveyToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "surveys" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SurveyToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__SurveyToUser" ("A", "B") SELECT "A", "B" FROM "_SurveyToUser";
DROP TABLE "_SurveyToUser";
ALTER TABLE "new__SurveyToUser" RENAME TO "_SurveyToUser";
CREATE UNIQUE INDEX "_SurveyToUser_AB_unique" ON "_SurveyToUser"("A", "B");
CREATE INDEX "_SurveyToUser_B_index" ON "_SurveyToUser"("B");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
