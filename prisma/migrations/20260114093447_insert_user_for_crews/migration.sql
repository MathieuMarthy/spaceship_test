
INSERT INTO "User" (email, username, password, points, "crewId", linkedin, photo, rank) VALUES
-- Orion
('alice@game.com', 'Alice', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 1200, 4, 'test', 'default.png', 'crewmate'),
('bob@game.com', 'Bob', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 900, 4, 'test', 'default.png', 'crewmate'),

-- Andromeda
('charlie@game.com', 'Charlie', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 2000, 5, 'test', 'default.png', 'crewmate'),
('diana@game.com', 'Diana', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 1800, 5, 'test', 'default.png', 'crewmate'),

-- Cosmos
('eve@game.com', 'Eve', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 700, 6, 'test', 'default.png', 'crewmate'),
('frank@game.com', 'Frank', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 500, 6, 'test', 'default.png', 'crewmate'),

-- Nova
('grace@game.com', 'Grace', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 3000, 7, 'test', 'default.png', 'crewmate'),
('henry@game.com', 'Henry', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 2500, 7, 'test', 'default.png', 'crewmate');