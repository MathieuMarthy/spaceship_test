
INSERT INTO "User" (email, username, password, points, "crewId", linkedin, photo, rank) VALUES
-- ENI
('alice@eni.fr', 'Alice', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 1200, 4, 'test', 'default.png', 'captain'),
('bob@eni.fr', 'Bob', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 900, 4, 'test', 'default.png', 'crewmate'),

-- EPSI
('charlie@epsi.com', 'Charlie', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 2000, 5, 'test', 'default.png', 'captain'),
('diana@epsi.com', 'Diana', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 1800, 5, 'test', 'default.png', 'crewmate'),

-- MDS
('eve@mds.com', 'Eve', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 700, 6, 'test', 'default.png', 'captain'),
('frank@mds.com', 'Frank', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 500, 6, 'test', 'default.png', 'crewmate'),

('dylang@3il.fr', 'Dydou', '$argon2id$v=19$m=65536,t=3,p=4$test$test', 0, NULL, 'test', 'default.png', 'unaffiliated')
