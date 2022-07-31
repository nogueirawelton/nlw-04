/*
  Warnings:

  - Added the required column `value` to the `surveys_to_users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_surveys_to_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "survey_id" TEXT NOT NULL,
    CONSTRAINT "surveys_to_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE SET NULL,
    CONSTRAINT "surveys_to_users_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "surveys" ("id") ON DELETE SET NULL ON UPDATE SET NULL
);
INSERT INTO "new_surveys_to_users" ("id", "survey_id", "user_id") SELECT "id", "survey_id", "user_id" FROM "surveys_to_users";
DROP TABLE "surveys_to_users";
ALTER TABLE "new_surveys_to_users" RENAME TO "surveys_to_users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
