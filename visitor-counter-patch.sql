-- Visitor Counter Table Creation Patch
-- This patch creates the visitor_counter table for tracking total site visits

-- Create visitor_counter table
CREATE TABLE IF NOT EXISTS `visitor_counter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total_visits` int(11) NOT NULL DEFAULT 0,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- Insert initial record with 0 visits
INSERT INTO `visitor_counter` (`total_visits`, `updated`, `created`) 
VALUES (0, NOW(), NOW());

-- Verify the table was created successfully
SELECT * FROM `visitor_counter`;
