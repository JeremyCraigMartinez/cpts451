ALTER TABLE `Category` ADD INDEX `name` (`name`);
ALTER TABLE `Category` ADD INDEX `c_bid` (`c_bid`);

ALTER TABLE `Attributes` ADD INDEX `a_bid` (`a_bid`);
ALTER TABLE `Attributes` ADD INDEX `attr_key` (`attr_key`);

ALTER TABLE `Business` ADD INDEX `business_id` (`business_id`);