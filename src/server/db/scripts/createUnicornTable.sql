use sys;
CREATE TABLE `unicorn`
(
	 `id` CHAR(36) PRIMARY KEY,
     `name` VARCHAR(50),
     `location` VARCHAR(50),
     `color` VARCHAR(50),
     `food` VARCHAR(50),
     `createdBy` VARCHAR(32),
     `createdAt` DATETIME,
     `updatedAt` DATETIME,
     `updatedBy` VARCHAR(32),
     `deletedAt` DATETIME
     ) ENGINE=InnoDB;

select * from unicorn;
INSERT INTO unicorn (id,name,location,color,food)
VALUES(UUID(), 'Sparkles', 'Pasture', 'Pink', 'Rainbows');
INSERT INTO unicorn (id,name,location,color,food)
VALUES(UUID(), 'Moomoo', 'Trail', 'White', 'Ice cream');
INSERT INTO unicorn (id,name,location,color,food)
VALUES(UUID(), 'Fluffy', 'Stables', 'Purple', 'Cookies');
