DROP TABLE IF EXISTS "todos";

CREATE TABLE "todos" (
	"id" SERIAL PRIMARY KEY,
	"text" TEXT,
	"isComplete" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todos"
  ("text")
  VALUES 
  ('Make a new todo task', false);