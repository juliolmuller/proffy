-- CreateTable
CREATE TABLE "class_schedules" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "weekday" INTEGER NOT NULL,
  "from" INTEGER NOT NULL,
  "to" INTEGER NOT NULL,
  "class_id" TEXT NOT NULL,

  CONSTRAINT "class_schedules_class_id_fkey"
    FOREIGN KEY ("class_id")
    REFERENCES "classes" ("id")
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "classes" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "subject" TEXT NOT NULL,
  "price" DECIMAL NOT NULL,
  "user_id" TEXT NOT NULL,

  CONSTRAINT "classes_user_id_fkey"
    FOREIGN KEY ("user_id")
    REFERENCES "users" ("id")
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "connections" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "user_id" TEXT NOT NULL,
  "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "connections_user_id_fkey"
    FOREIGN KEY ("user_id")
    REFERENCES "users" ("id")
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "users" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "avatar" TEXT NOT NULL,
  "whatsapp" TEXT NOT NULL,
  "bio" TEXT NOT NULL
);
