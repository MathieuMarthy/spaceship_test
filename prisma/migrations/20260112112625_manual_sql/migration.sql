-- This is an empty migration.
INSERT INTO "User" (email, username, password, rank, linkedin, points, photo)
VALUES (
  'admin@game.com',
  'admin',
  '$argon2id$v=19$m=65536,t=3,p=4$34F2MTvRJxXcoJRw5/K/bQ$1XNi79AMg1JcyUJ7/emrRY7wgKl5lI+jEPX9iNnqLf8',
  'unaffiliated',
  'test',
  0,
  'default.png'
);
