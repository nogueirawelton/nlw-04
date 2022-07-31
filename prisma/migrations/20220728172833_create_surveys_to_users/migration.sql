/*
  Warnings:

  - You are about to drop the `_SurveyToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_SurveyToUser";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "surveys_to_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "survey_id" TEXT NOT NULL,
    CONSTRAINT "surveys_to_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE SET NULL,
    CONSTRAINT "surveys_to_users_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "surveys" ("id") ON DELETE SET NULL ON UPDATE SET NULL
);
