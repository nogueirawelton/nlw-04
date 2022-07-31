-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_surveys_to_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "survey_id" TEXT NOT NULL,
    CONSTRAINT "surveys_to_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "surveys_to_users_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "surveys" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_surveys_to_users" ("created_at", "id", "survey_id", "user_id", "value") SELECT "created_at", "id", "survey_id", "user_id", "value" FROM "surveys_to_users";
DROP TABLE "surveys_to_users";
ALTER TABLE "new_surveys_to_users" RENAME TO "surveys_to_users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
