-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 31, 2021 at 02:16 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iaas`
--

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

-- DROP TABLE IF EXISTS `testimonials`; 
-- CREATE TABLE IF NOT EXISTS `testimonials` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `application_id` int(11) NOT NULL,
--   `user_id` int(11) NOT NULL,
--   `internship_id` int(11) NOT NULL,
--   `testimony` text NOT NULL,
--   `image_url` varchar(255),
--   `updated` datetime NOT NULL,
--   `created` datetime NOT NULL,
--   primary key 
-- ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `testimonials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `application_id` int NOT NULL,
  `user_id` int NOT NULL,
  `internship_id` int NOT NULL,
  `testimony` text CHARACTER NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_location` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `image_path` varchar(300) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO iaas.events
(date_location, user_id, status, title, content, image_path, updated, created)
VALUES('Bonn, Germany, 10-13th March 2022', 60, 1, 'International Conference for Youth in Agriculture', '<p style="margin-left:0px;">Are you ready to look into the future of cropping systems, meet fellow agricultural students and go on (real-life) excursions? During the International Conference for Youth in Agriculture 2022 (ICYA22) from 10-13th March, we will focus on old and new cropping systems and how they can develop under the topic of "Cropping systems for the future". In times of climate change, biodiversity loss, and changing societal demands, it is worth broadening your scope as a young person in the field of agriculture. ICYA22 will be the place to share your research, engage with others, go on (online) excursions and attend inspiring lectures during the biggest agricultural conference organised by students.</p><p style="margin-left:0px;">There are two options to join ICYA22:</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">In Bonn, Germany, we will welcome a group of 60 young people in the field of agriculture. Here you will get lectures from leading scientists and companies in agriculture. Bonn is located close to exciting institutions and has novel experiments going on. Offline attendance in Bonn starts from €50 to €150 depending on your country category for a three-night stay in Bonn, including food, drinks, accommodation, conference rooms, transportation in Bonn, excursions and the possibility to present your own work during a poster presentation. You can register for offline attendance for ICYA22 in Bonn, Germany, till the 1st of February via this form: <a href="https://forms.gle/xm9uxGrypDMjshH67">LINK</a>.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">Online attendance is also possible and will be free. If you register, you will have the possibility to follow all the lectures from the conference in Bonn. However, for those that want to present their work and engage more with the offline attendees, it is possible to buy the ICYA+ package, including all kinds of additional extra''s, including tools to improve your writing skills. This package will start from €10 to €25, depending on your country category. You can register for online attendance for ICYA 22 till the 1st of March via this form: <a href="https://forms.gle/TZ5RLwXgdPWmynH99">LINK</a>.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">There are limited packages and spots available for offline attendance. So please don''t wait too long and join us for ICYA22!</p><p style="margin-left:0px;">&nbsp;</p><figure class="image image_resized" style="width:36.27%;"><img src="https://iaas-world-space-prd.ams3.digitaloceanspaces.com/uploads/1673272153682-icya2.png"></figure>', '1673272137870-icya1.png', '2023-01-09 13:49:30', '2023-01-09 13:49:30');


DROP TABLE IF EXISTS `application`;
CREATE TABLE IF NOT EXISTS `application` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `step` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `internship_id` int(11) NOT NULL,
  `motivational_letter` varchar(200) NOT NULL,
  `from_date` text NOT NULL,
  `to_date` text NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`id`, `step`, `user_id`, `internship_id`, `motivational_letter`, `from_date`, `to_date`, `updated`, `created`) VALUES
(1, 1, 48, 1, '1608274135858-1605122239265-iaastest.jpg', '2020-12-12', '2020-12-12', '2020-12-18 06:49:29', '2020-12-18 06:49:29');

-- --------------------------------------------------------

--
-- Table structure for table `application_step`
--

DROP TABLE IF EXISTS `application_step`;
CREATE TABLE IF NOT EXISTS `application_step` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `step_number` int(11) NOT NULL,
  `message` text NOT NULL,
  `first_file_path` text,
  `second_file_path` text,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  `application_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_category_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `image_path` varchar(300) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ARTICLE_CATEGORY` (`article_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `article_category_id`, `user_id`, `status`, `title`, `content`, `image_path`, `updated`, `created`) VALUES
(1, 1, 42, 1, 'Article 1', '<p><strong>This is test article</strong></p>', '1606914812544-IMG-6f8acf27bbe5b9b0074708c56291acd5-V.jpg', '2020-12-02 14:36:26', '2020-08-11 19:43:00'),
(2, 1, 42, 1, 'Article 2', '<p>dasdas</p><p>mnonnniojhmuhuhuojndrioymio jrtkioyjn irodjyodyrdjyjkdrkn rkodn</p><p>mklejmtnojowijtoekjtio krmngyrkejmoemiomyiojmyiorjmeiojmr</p><p>grmemrepoymeropymroormkhopmk</p><p>fgepoktgopkeroptgkopfkghdropmopyjmhrt</p>', '1606914829838-IMG-52377ee3eaa17613b1a2c6cf967d7b2b-V.jpg', '2020-12-02 14:35:43', '2020-10-18 14:22:55'),
(3, 2, 42, 1, 'IAAS logos', '<p>asdas</p>', '1606914843684-IMG-3fc059f64158492452f77717376cec3c-V.jpg', '2020-12-02 13:14:07', '2020-10-18 14:23:15'),
(4, 2, 42, 1, 'asdasd', '<p>dasda</p><p>jknjknkljnkl;nkononiojh</p><p>otpfhjotjhotjmfojhmot</p><p>hbrmdhk</p><p>lmdhmdr</p><p>mbiomhikjm</p><p>ntiojnhiotjh</p><p>hrdkhmdrthomrthiomtiomhiotmghmiktht</p><p>mhtlhmtoijhiotjophktopkhoptmkhoptmopkmoptkh</p><p>hmtlhmtphmpotmohmmoimtoijogkmh</p>', '1606914868229-IMG-f3299b07d003540c7cd39e6177e84162-V.jpg', '2020-12-02 14:53:04', '2020-11-23 20:36:06'),
(5, 1, 42, 1, 'gdrgrgr', '<p>g</p>', '1606920948231-20191005_173124.jpg', '2020-12-02 14:56:01', '2020-12-02 14:56:01'),
(6, 1, 42, 1, 'hrtht', '<p>gggg</p><p>g</p><p>h</p><p>j</p><p>khjmnty</p><p>j</p><p>k</p><p>gf</p><p>d</p><p>s</p>', '1606920983455-20200104_123323.jpg', '2020-12-02 15:03:16', '2020-12-02 14:56:29');

-- --------------------------------------------------------

--
-- Table structure for table `article_category`
--

DROP TABLE IF EXISTS `article_category`;
CREATE TABLE IF NOT EXISTS `article_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `article_category`
--

INSERT INTO `article_category` (`id`, `name`, `description`, `updated`, `created`) VALUES
(1, 'ExPro articles', 'Expro articles', '2020-08-03 10:17:56', '2020-08-03 10:17:56'),
(2, 'Test category', 'Test category', '2020-10-18 13:35:04', '2020-10-18 13:35:04'),
(3, 'Environment', 'Environment', '2021-01-14 00:00:00', '2021-01-14 00:00:00'),
(4, 'Humans of IAAS', 'Humans of IAAS', '2021-01-14 00:00:00', '2021-01-14 00:00:00'),
(5, 'Exchange Program Blog', 'Exchange Program Blog', '2021-01-14 00:00:00', '2021-01-14 00:00:00'),
(6, 'Agri-news', 'Agri-news', '2021-01-14 00:00:00', '2021-01-14 00:00:00'),
(7, 'Events\r\n', 'Events\r\n', '2021-01-14 00:00:00', '2021-01-14 00:00:00'),
(8, 'Trainings', 'Trainings', '2021-01-14 00:00:00', '2021-01-14 00:00:00'),
(9, 'Opportunities', 'Opportunities', '2021-01-14 00:00:00', '2021-01-14 00:00:00'),
(10, 'Sustainability & Environment', 'Sustainability & Environment', '2021-01-14 00:00:00', '2021-01-14 00:00:00'),
(11, 'Alumni', 'Alumni', '2021-01-31 08:59:43', '2021-01-31 08:59:43');

-- --------------------------------------------------------

--
-- Table structure for table `background_field`
--

DROP TABLE IF EXISTS `background_field`;
CREATE TABLE IF NOT EXISTS `background_field` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `background_field`
--

INSERT INTO `background_field` (`id`, `name`, `description`, `updated`, `created`) VALUES
(1, 'test', 'test', '2020-12-18 00:00:00', '2020-12-18 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `article_id`, `user_id`, `content`, `updated`, `created`) VALUES
(2, 1, 42, 'Wow, the comments section works!', '2020-10-18 17:56:58', '2020-10-18 17:56:58');

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
CREATE TABLE IF NOT EXISTS `country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country_category_id` int(11) DEFAULT NULL,
  `region_id` int(11) DEFAULT NULL,
  `country_status_id` int(11) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `code` varchar(5) DEFAULT NULL,
  `is_active` smallint(6) DEFAULT NULL,
  `national_director` text NOT NULL,
  `expro_email` text NOT NULL,
  `exchange_coordinator` varchar(100) DEFAULT NULL,
  `iaas_email` varchar(100) DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `look` text,
  `weather` text,
  `places_to_visit` text,
  `public_transport` text,
  `languages` text,
  `currency` text,
  `visa_information` text,
  `local_committees` text,
  `local_activities` text,
  `internship_request` text,
  `people_country` text,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_COUNTRY_CSTATUS` (`country_status_id`),
  KEY `FK_COUNTRY_REGION` (`region_id`),
  KEY `FK_COUNTRY_CATEGORY` (`country_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `country_category_id`, `region_id`, `country_status_id`, `name`, `code`, `is_active`, `national_director`, `expro_email`, `exchange_coordinator`, `iaas_email`, `photo`, `look`, `weather`, `places_to_visit`, `public_transport`, `languages`, `currency`, `visa_information`, `local_committees`, `local_activities`, `internship_request`, `people_country`, `updated`, `created`) VALUES
(1, 5, 1, 4, 'Germany', 'DE', 1, '', '', 'Jule Gruyters', 'expro.germany@iaasworld.org', '1595237383066-de.jpg', NULL, 'Spring: Mar-June; much rain, changeable weather and temperatures; Summer: June-Sept; warm temperatures, up to 35° C, average about 17 °C; Autumn: Sept-Dec; much rain; Winter: Dec-Mar: cold temperatures, often snow; During winter there is not much work to be done on the field, so the better period to come would be from March-October. In the moment our farms would accept students only in that period.', 'Depending on region and interests, for example ,there are many nice or ancient cities, swimming baths or high rope course', NULL, 'German, many people also speak English', NULL, 'http://www.auswaertiges-amt.de/EN/EinreiseUndAufenthalt/Visabestimmungen_node.html,', NULL, 'yes, but different activities every year, eg. film presentations, meetings, farm visits', 'possible, but often problems getting a visa (for African students)', 'good, nearly everything can be reached by bus or train', '2020-10-12 14:19:57', '2020-03-10 00:00:00'),
(5, 3, 1, 2, 'Montenegro', 'ME', NULL, 'Aleksandar PLamenac', 'expro.montenegro@iaasworld.org', 'Aleksandar Plamenac', 'iaas.montenegro@iaasworld.org', '1595238327375-me.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'dfsd', NULL, '2020-12-01 10:27:55', '2020-03-08 21:44:56'),
(6, 4, 1, 1, 'Austria', 'AT', NULL, '', '', 'Christof Ott', 'expro.austria@iaasworld.org', '1595200037054-au.jpg', 'Mostly Alpine areas in the south and agricultural landscape around the danube river', NULL, ' Skiing in winter and hiking in summer. Also the City’s Salzburg, Graz and of course Vienna are always worth a visit and easy reachable by train.', NULL, 'German and English', NULL, 'No Visa for EU Members needed ', 'We are always working on different projects with focus on our studies, but nothing on regular bases. So if you are interested just ask.', NULL, NULL, NULL, '2020-07-19 23:08:50', '2020-07-19 23:04:55'),
(7, 2, 2, 1, 'Bangladesh', 'BD', NULL, '', '', 'Abidur Rahman', 'expro.bangladesh@iaasworld.org', '1595200225834-bangla.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-19 23:10:53', '2020-07-19 23:10:25'),
(8, 4, 1, 3, 'Belarus', 'BY', NULL, '', '', NULL, 'expro.belarus@iaasworld.org', '1595200348859-belarus.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-19 23:12:29', '2020-07-19 23:12:29'),
(9, 5, 1, 1, 'Belgium', 'BE', 1, '', '', 'Kamiar Torabi', 'expro.belgium@iaasworld.org', '1595200514158-Flag-Belgium.jpg', 'We have a small country, but that does not make it less interesting. On the contrary, Belgium is a multicultural, diverse, cultural, hard working country but where there is always time for some leisure.\n\n4 seasons:winter, spring, summer and autumn. Temperatures differ from zero degrees during the winter to 30 degrees in the summer. Rain is plenty all year round', NULL, 'The many different cities, like Antwerp, Gent, Leuven, Brussel, Bruges and Liège, but also other cities in foreign countries, like Rotterdam and Amsterdam in Holland or Paris in France. Thanks to its very central place in Europe, a lot of travel destinations are easily reached from Belgium. You can go to the sea in the North West of the country and in  the soth thee are a lot of beautiful forests ', NULL, 'Mainly Dutch and French, most people understand English', NULL, 'visa requierments for periods up to 90 days in the Shengen area: https://www.schengenvisainfo.com/who-needs-schengen-visa/', 'exchange weeks, activities organized by the local comitees. As well various local events', NULL, NULL, 'Arrive with an empty box, and you’ll leave with one full of wonderful memories.', '2020-07-19 23:15:14', '2020-07-19 23:15:14'),
(10, 1, 4, 1, 'Benin', 'BJ', 1, '', '', 'Mourchid Achamou', 'expro.benin@iaasworld.org', '1595200796399-Bandera-de-Benin-1024x730.png', 'Benin shares 2 123 km of terrestrian border with four countries : Burkina Faso (386 km), Niger (809 km), Nigeria (809 km) and Togo (651 km)\n\nBenin has two types of climat : South, there is an equatorial climate with high humidity. There is a shift between dry season (from November to March and from half July to half September) and a rain season (from April to half July and from half september to october). In North and center of the country, there is a tropical climate', NULL, 'Beaches, touristic sites and agricultural places', NULL, 'Frensh and English', NULL, 'http://diplomatie.gouv.bj/', 'Farm work', NULL, NULL, NULL, '2020-07-19 23:19:56', '2020-07-19 23:19:56'),
(11, 3, 1, 1, 'Bulgaria', 'BG', NULL, '', '', NULL, 'expro.bulgaria@iaasworld.org', '1595200870238-Flag_of_Bulgaria_(bordered).png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-19 23:21:10', '2020-07-19 23:21:10'),
(12, 3, 3, 1, 'Chile', 'CL', 1, '', '', 'Pedro pablo montes', 'expro.chile@iaasworld.org', '1595200984698-xah3la0wl5x41.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-19 23:23:04', '2020-07-19 23:23:04'),
(13, 2, 3, 1, 'Costa Rica', 'CR', 1, '', '', 'Bryan Rodriguez', 'expro.costarica@iaasworld.org', '1595236615708-costarica.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:16:56', '2020-07-20 09:16:56'),
(14, 2, 4, 1, 'Côte D\'Ivoire', 'CI', NULL, '', '', 'Romuald KOUYA', 'expro.cotedivoire@iaasworld.org', '1595236716511-flag-of-ivory-coast-flag-of-cote-divoire.jpg', '\"Côte d\'Ivoire is a sub-Saharan nation in southern West Africa located at 8 00°N, 5 00°W. The country is approximately square in shape. Its southern border is a 515 km (320 mi) coastline on the Gulf of Guinea on the north Atlantic Ocean. On the other three sides it borders five other African nations for a total of 3,458 km (2,149 mi): Liberia to the southwest for 778 km (483 mi), Guinea to the northwest for 816 km (507 mi), Mali to the north-northwest for 599 km (372 mi), Burkina Faso to the north-northeast for 545 km (339 mi), and Ghana to the east for 720 km (447 mi).\nCôte d\'Ivoire comprises 322,463 km2 (124,500 sq mi), of which 318,003 km2 (122,780 sq mi) is land and 4,460 km2 (1,720 sq mi) is water, which makes the country about the size of Germany.\"\n\n\"January – June: Dry season\nJune – October: Rainy season\nNovember – December: Harmattan; The Harmattan is a hot, dry and dusty wind (continental trade wind) blowing over West Africa\"', NULL, 'Cultural festival, Music concert, Outing at the beautiful Beaches and Lagoons of Abidjan, Civilizations Museum, Shopping at Abidjan Mall, Visit of Touristic attractions such as the Basilica Our lady of Peace (The biggest in the World), The National Park of Banco and Taï, Assinie-Mafia (the Earthly Paradise), Night-Clubs', NULL, 'French and English', NULL, '\"PROCEDURE (https://snedai.com/e-visa/)\nStep 1: Pre-enrollment and payment\nPre-enrollment is to record some personal information and to download 3 documents:\n-the identity page of the passport\n-the booking of airfare\n-the invitation letter or certificate of accommodation.\nAfter pre-enrollment, the applicant performs a fee for obtaining the Visa whose duration is 3 months (multiple-input) and are as follows: 73 Euros (including bank charges).\nThe payment is made with VISA or MASTERCARD .\nWhen the payment is made, the applicant receives an instant mail (accompanied by an attachment on which there is the unique, personal code certificate of payment)\nStep 2: Receive response DST\nThe applicant receives an email address in a time of 48h working days a document (contains a bar code) which is the response of the authorities (approved or denied).\nStep 3: Enrollment at the airport\nThe applicant embarked with the document “Pre-enrollment approved” and is presented on arrival at the airport to the “airport Visa” space. It performs its biometric enrollment and visa is printed and delivered immediately. The box E-visa enrollment are available 24h / 24 and 7/7.\nNB:\n– Enrollment (fingerprinting and photo) is required for each visa application, even if the applicant has already obtained several visas.\n– The biometric visa requires the presence of the applicant. Fingerprinting is required for all except for minors under 12 years, but their presence is necessary.\n\nLIST OF DOCUMENTS TO BE SUBMITTED TO THE AIRPORT ABIDJAN\n1) The original receipt of payment of fees visa 73 Euros including bank charges;\n2) The approval of the DST (pre-visa or leave land);\n3) valid passport for at least six months;\n4) The international certificate of vaccination against yellow fever\"', '\"1. Agricultural Festival at the National Polytechnic Institute/ Superior School of Agricultural Sciences, Yamoussoukro\n2. Agricultural Fair at the National Private Institute of Tropical Agriculture, Adzopé and at the Regional School of South Agriculture, Bingerville\n3. Conferences, Trainings and Workshops at the Félix Houphouët-Boigny University, Abidjan\"', NULL, NULL, NULL, '2020-07-20 09:18:36', '2020-07-20 09:18:36'),
(15, 3, 1, 1, 'Croatia', 'HR', 1, '', '', 'Jure Atlija', 'expro.croatia@iaasworld.org', '1595236815018-EN_Bandiera_croazia.jpg', 'Part of Central Europe and Southeast Europe, a part of the Balkans and Mitteleuropa. Croatia has a number of ecoregions because of its climate and geomorphology, and the country is consequently among the most biodiverse in Europe. There are four regions in Croatia: Mediterranean along the coast and in its immediate hinterland; Alpine in the elevated Lika and Gorski Kotar; Pannonian along the Drava and Danube; and Continental in the remaining areas. There are 444 protected natural areas in Croatia.', '\"January – June: Dry season\nJune – October: Rainy season\nNovember – December: Harmattan; The Harmattan is a hot, dry and dusty wind (continental trade wind) blowing over West Africa\"', 'Like much of Europe, Croatia boasts its share of medieval cities and historic ruins, but what makes it exceptional is its wealth of stunning natural attractions such as the Plitvice Lakes, the spectacular Adriatic coastlines and gorgeous islands. 10 places we would recommend: Krka National Park, Zagreb, Korčula, Pula, Zadar, Rovinj, Split, Plitvice, Hvar, Dubrovnik.', NULL, 'French and English', NULL, '\"PROCEDURE (https://snedai.com/e-visa/)\nStep 1: Pre-enrollment and payment\nPre-enrollment is to record some personal information and to download 3 documents:\n-the identity page of the passport\n-the booking of airfare\n-the invitation letter or certificate of accommodation.\nAfter pre-enrollment, the applicant performs a fee for obtaining the Visa whose duration is 3 months (multiple-input) and are as follows: 73 Euros (including bank charges).\nThe payment is made with VISA or MASTERCARD .\nWhen the payment is made, the applicant receives an instant mail (accompanied by an attachment on which there is the unique, personal code certificate of payment)\nStep 2: Receive response DST\nThe applicant receives an email address in a time of 48h working days a document (contains a bar code) which is the response of the authorities (approved or denied).\nStep 3: Enrollment at the airport\nThe applicant embarked with the document “Pre-enrollment approved” and is presented on arrival at the airport to the “airport Visa” space. It performs its biometric enrollment and visa is printed and delivered immediately. The box E-visa enrollment are available 24h / 24 and 7/7.\nNB:\n– Enrollment (fingerprinting and photo) is required for each visa application, even if the applicant has already obtained several visas.\n– The biometric visa requires the presence of the applicant. Fingerprinting is required for all except for minors under 12 years, but their presence is necessary.\n\nLIST OF DOCUMENTS TO BE SUBMITTED TO THE AIRPORT ABIDJAN\n1) The original receipt of payment of fees visa 73 Euros including bank charges;\n2) The approval of the DST (pre-visa or leave land);\n3) valid passport for at least six months;\n4) The international certificate of vaccination against yellow fever\"', '\"1. Agricultural Festival at the National Polytechnic Institute/ Superior School of Agricultural Sciences, Yamoussoukro\n2. Agricultural Fair at the National Private Institute of Tropical Agriculture, Adzopé and at the Regional School of South Agriculture, Bingerville\n3. Conferences, Trainings and Workshops at the Félix Houphouët-Boigny University, Abidjan\"', NULL, NULL, NULL, '2020-07-20 09:20:15', '2020-07-20 09:20:15'),
(16, 1, 4, 2, 'DRC', 'CD', NULL, '', '', 'Gedeon Kalombo Ntambwe', 'expro.drc@iaasworld.org', '1595236898500-Congo-1579629559.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:21:38', '2020-07-20 09:21:38'),
(17, 2, 3, 1, 'Ecuador', 'EC', 1, '', '', 'Bryan Leonardo Tapia Alcívar', 'expro.ecuador@iaasworld.org', '1595237011992-banderaecuador.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:23:32', '2020-07-20 09:23:32'),
(18, 3, 4, 3, 'Egypt', 'EG', NULL, '', '', 'Aya Hosny', 'expro.egypt@iaasworld.org', '1595237128665-egypt.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:25:29', '2020-07-20 09:25:29'),
(19, 5, 1, 1, 'France', 'FR', NULL, '', '', 'Laura Vimenet', 'expro.france@iaasworld.org', '1595237238496-france.jpg', NULL, 'Winter, spring, summer and autumn', NULL, NULL, 'French', NULL, 'Can be found in website', NULL, NULL, NULL, NULL, '2020-07-20 09:27:18', '2020-07-20 09:27:18'),
(20, 2, 4, 1, 'Ghana', 'GH', 1, '', '', 'Agbati Doe Yaw Samuel', 'expro.ghana@iaasworld.org', '1595237512201-ghana.png', NULL, 'Winter and summer', NULL, NULL, 'English and French ', NULL, 'can be found in website', NULL, 'National congress', NULL, NULL, '2020-07-20 09:31:52', '2020-07-20 09:31:52'),
(21, 4, 1, 1, 'Greece', 'GR', NULL, '', '', 'Ermioni Argiropoulou', 'expro.greece@iaasworld.org', '1595237641781-grcka_zastava.jpg', 'Greece is located on the tip of the Balkan Peninsula, in the SE Mediterranean.', 'All seasons present. Generally mild winters and warm dry summers.', 'Visit archaeological sites and museums , indulge in the local cuisine. In the summer the best activity is to visit the local beaches.', NULL, 'English, German and Greek', NULL, 'No visa required for EU Citizens, visa information varies on country of origin for non EU citizens . Greece is both a member of the EU and the Schengen Zone.', NULL, NULL, NULL, NULL, '2020-07-20 09:34:02', '2020-07-20 09:34:02'),
(22, 2, 3, 1, 'Guatemala', 'GT', NULL, '', '', 'Brian López', 'expro.guatemala@iaasworld.org', '1595237727874-guatemala.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:35:27', '2020-07-20 09:35:27'),
(23, 2, 2, 3, 'India', 'IN', NULL, '', '', 'Sangam Adhikari', 'expro.india@iaasworld.org', '1595237789411-india.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:36:29', '2020-07-20 09:36:29'),
(24, 2, 2, 1, 'Indonesia', 'ID', 1, '', '', 'Drinancahya Dunya', 'expro.indonesia@iaasworld.org', '1595237915757-flagge-indonesien.jpg', 'Based on the landscape, Yogyakarta can be grouped into four physiographic units, they are physiographic unit of Merapi Volcano, Southern Mountains physiographic units or Thousand Mountains, physiographic unit of Kulon Progo Mountains, and Lowlands physiographic unit.', 'Dry season and rainy season', 'Going to beautiful beach in Gunungkidul or Kaliurang plateau, visit Prambanan temple and other heritage places, enjoy the traditional culture of Yogyakarta like visiting Sultan’s palace or having some special food at main square.', NULL, 'Indonesia and Javanese but some people can use English.', NULL, 'http://www.yogyakartatourism.com/how-to-get-in/visa-advice/', 'CV. Telaga Nursery and Sabila Farm', NULL, 'Possible for African students', 'We can use Trans Jogja to travel around the city. Passengers pay for one trip and can go any distance along the bus route. The cost is Rp 4.000 per trip. It operates from 5:30 AM until 9:30 PM', '2020-07-20 09:38:35', '2020-07-20 09:38:35'),
(25, 4, 1, 1, 'Italy', 'IT', 1, '', '', 'Alessia Viscardi', 'expro.italy@iaasworld.org', '1595237987664-italija_-zastava.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:39:48', '2020-07-20 09:39:48'),
(26, 5, 2, 1, 'Japan', 'JP', NULL, '', '', 'Keiko Shiroishi', 'expro.japan@iaasworld.org', '1595238052134-japan_zastava.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:40:52', '2020-07-20 09:40:52'),
(27, 2, 4, 1, 'Kenya', 'KE', NULL, '', '', 'James Mwangi', 'expro.kenya@iaasworld.org', '1595238112219-standard_kenya.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:41:52', '2020-07-20 09:41:52'),
(28, 2, 4, 1, 'Mali', 'ML', NULL, '', '', 'Mahamadou KONTE', 'expro.mali@iaasworld.org', '1595238171282-mali.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:42:51', '2020-07-20 09:42:51'),
(29, 3, 3, 1, 'Mexico', 'MX', 1, '', '', 'Saraí Vega Cuevas ', 'expro.mexico@iaasworld.org', '1595238276055-mexico.jpg', 'Mexico is a country with high mountains and deep canyons in the center of the country, deserts in the north, and dense rain forests in the south and east. Between the Sierra Madre Oriental mountain range in the east and the Sierra Madre Occidental in the west lie small mountain ranges on the Central Plateau.', 'The rainy season through most of Mexico falls roughly from May through September or October. During the rest of the year, there is little or no rain. Different seasons are seen through the country as the north is arid, the plateau is template and the south is warm.', 'Mexico is a rich country where you can visit beaches, forest and natural parks. Also, you there are cities with a lot of cultural and historical activities.', NULL, 'Spanish or English required, English is spoken only in some places!! At least a medium Spanish level is recommended, it will improve your experience a lot!', NULL, '\nYou can check if your country needs visa in the following link: https://www.inm.gob.mx/gobmx/word/index.php/paises-requieren-visa-para-mexico/', 'There are two committees located in Chapingo and in Querétaro city. In any of them you can assist to workshops, integrations, conferences, lectures among others.', NULL, 'Possible for African students', 'We do have public transport very cheap and taxi service', '2020-07-20 09:44:36', '2020-07-20 09:44:36'),
(30, 2, 4, 1, 'Morocco', 'MA', 1, '', '', 'Amal Ibijbijen', 'expro.morocco@iaasworld.org', '1595238441075-maroko.jpg', '\"Morocco is a country located in Northern Africa along the Atlantic Ocean and the Mediterranean Sea.\nIt is officially called the Kingdom of Morocco and it is known for its long history, rich culture and diverse cuisine. Morocco’s capital city is Rabat but its largest city is Casablanca.\nArea: 712,550 km²\nCoastline: 2945 km\nPopulation: 35,740,000 (2017 census)\"', '\"The 4 seasons are widely present in Morocco.\nIn the interior the temperatures are more extreme, winters can be fairly cold and the summers very hot. In fact, the further you go from the ocean the more extreme winter and summer temperatures become. The most pleasant time to visit Morocco is in the spring and autumn, when the weather is warm and dry.\"', NULL, NULL, '\"Moroccan Arabic or Darija +++++\nAmazigh +++\nStandard Arabic +++++\nFrench ++++\nEnglish +++\nSpanish +\"', NULL, 'It depends on the country. Check out the Moroccan embassy in your country or the ministry of foreign affairs.', NULL, ' Many international events are held by IAAS Morocco (Exchange weeks, ExCo meeting 2019) along with quite a number of projects.', NULL, NULL, '2020-08-03 11:39:22', '2020-07-20 09:47:21'),
(31, 1, 2, 1, 'Nepal', 'NP', NULL, '', '', 'Nirmal Sapkota', 'expro.nepal@iaasworld.org', '1595238556576-np-flag.png', 'landlocked mountainous country with beautiful natural view.Altitude starts from 53m above sea level to the top of the world i.e mt.Everest(8848m)', 'Four different season- Spring , Summer, Rainy, Winter', NULL, NULL, 'English', NULL, 'Almost very easy', NULL, 'Trekking, rafting, swimming, bungy jump and many more adventure experiences', NULL, NULL, '2020-07-20 09:49:16', '2020-07-20 09:49:16'),
(32, 5, 1, 1, 'Netherlands', 'NL', 1, '', '', 'Fanny Beekman', 'expro.netherlands@iaasworld.org', '1595238623362-netherlands.jpg', 'Small, densely-populated country located in Western Europe. Long coastline and a flat landscape (perfect for cycling). Lots of man-made land thanks to dykes. Be prepared for occasional rain!', 'Winter, spring, summer, autumn.', '\"Dutch public transport is expensive but efficient, and as the Netherlands is a small country, you can see many of the highlights:\n– Beautiful cities, traditional and modern.\n– In spring, you can visit the tulip gardens at Keukenhof.\n– The windmills of Kinderdijk.\n– Beaches, dykes, and dunes.\nAnd if you’re tired of that, the Netherlands borders Germany and Belgium, full of their own attractions.\n\nSee more at:\nhttps://wikitravel.org/en/Netherlands\"', NULL, 'You can easily get by with just English, as most people have a good command of the language. The official language is Dutch.', NULL, '\"Check whether you need a visa – and how to get it – here:\nhttps://www.netherlandsandyou.nl/travel-and-residence/visas-for-the-netherlands\n\nThe Netherlands is part of the Schengen zone of the EU, so once you have a Dutch visa, you can travel around most of the rest of Europe visa-free.\"', NULL, 'Interns are welcome to join our weekly meetings. We also do occasional trade fairs and workshops. ', NULL, '\"Wageningen University and Research is one of the leading agricultural universities. People come here from all over the world to study and do research. Despite the town being quite small, there is a very international vibe, with 50% of MSc students coming from abroad.\n\nWageningen is a small town – quaint, but nothing too fascinating – which means that everyone is here because they are interested in the work they do. The atmosphere is unique, also because people are highly aware of issues regarding sustainability and agriculture. There are also plenty of related activities for internationals.\"', '2020-07-20 09:52:05', '2020-07-20 09:50:23'),
(33, 1, 4, 1, 'Niger', 'NE', NULL, '', '', 'Harouna Abass', 'expro.niger@iaasworld.org', '1595238790849-niger.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:53:10', '2020-07-20 09:53:10'),
(34, 2, 4, 3, 'Nigeria', 'NG', NULL, '', '', 'Samuel Omisakin', 'expro.nigeria@iaasworld.org', '1595238845759-NG.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:54:05', '2020-07-20 09:54:05'),
(35, 2, 3, 1, 'Paraguay', 'PY', NULL, '', '', 'Pedro Antonio Román Brítez ', 'expro.paraguay@iaasworld.org', '1595238952537-paragvaj.jpg', 'It is located in the center of South America, for that reason it is known as the “Heart of America”; It is a Mediterranean country, it has no direct access to the sea. It has an area of ​​406,752 km². It is located between latitudes 19º 18`and 27º 30`and longitudes 54º 19` and 62º 38º west of the meridian of Greenwich.', 'The country has four stations: Summer (December to March), Autumn (March to June), Winter (June to September), Spring (September to December). But because it is a sub tropical country most of the year is found with high temperatures', 'Visit tourist sites for example: Tree Tunnel, Crystal Jump, The caverns of Vallemi, Lake ¨Ojo del Mar¨, The San Cosme and Damian Dunes, Monday’s jump, Ita Kua, Ypacarai Lake and Ruins of Trinidad and other places.', NULL, 'In much of the country in Spanish and Guaraní (native language).', NULL, '\"Citizens of the following countries require a visitor visa to be in transit or to enter Paraguay: Belize, Canada, Costa Rica, Mexico, Panama. Citizens of the following countries do not require a visitor visa to be in transit or to enter Paraguay: Argentina, Chile, Colombia, Guatemala, United States, Uruguay.\nFor any questions, consult the embassy or consulate.\"', NULL, 'Meetings, conferences, camp (annual) and various activities (field days, training for producers, etc.)', 'Yes', NULL, '2020-07-20 09:55:52', '2020-07-20 09:55:52'),
(36, 3, 3, 3, 'Peru', 'PE', NULL, '', '', 'Jeale Fitopato', 'expro.peru@iaasworld.org', '1595239044240-peru.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:57:24', '2020-07-20 09:57:24'),
(37, 3, 1, 1, 'Poland', 'PL', NULL, '', '', 'Marta Strzelczyk', 'expro.poland@iaasworld.org', '1595239098215-poland.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 09:58:18', '2020-07-20 09:58:18'),
(38, 4, 1, 1, 'Portugal', 'PT', 1, '', '', 'Nuno Neto', 'expro.portugal@iaasworld.org', '1595239193010-portugal.png', 'Located in the western tip of Europe there’s a country that faces the Atlantic Ocean. This country has strong connections to the sea but has also deep roots on the work of the land and agriculture. From the mountains and plateaus of Trás os Montes and Beira Interior in the Northeastern part of the country, to the flat plains of Alentejo in the South, from the lush green fields surrounded by vineyards in the Minho to the pear orchards in the western region, from the outstanding vineyards of the Douro to the citrus orchards in the Algarve, from the very productive Ribatejo, land of bullfights, to the islands of Açores, land of the happy cows, and the archipelago of Madeira, known for its flowers and wine. This country is Portugal.', 'Our climate is characterized by hot summers, and mild winters. Autumn and Spring with very comfortable weather, a coat will do the job. ', 'You can easily get to a traditional bar or pub and enjoy the nightlife. If you are near the coast you can go to beach or enjoy the landscapes around the country. If you are near an historic city, you can walk around and get to know the town and historic and iconic places.', NULL, 'Portuguese is the mother language but younger generations speak basic English. Some people understand Spanish too.', NULL, 'can be found in website', '', 'Every activity the local committees are organizing at the time, from wine tasting, to lectures or technical visits.', 'Yes', 'Bring the right clothes for each season. Enjoy the most you can of what our country has to offer in agriculture, lifestyle and tourism.', '2020-07-20 09:59:53', '2020-07-20 09:59:53'),
(39, 2, 1, 1, 'Serbia', 'RS', 1, '', '', 'Sofija Djekic', 'expro.serbia@iaasworld.org', '1595239264523-serbia.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 10:01:04', '2020-07-20 10:01:04'),
(40, 4, 1, 1, 'Slovenia', 'SI', NULL, '', '', 'Maša Resnik', 'expro.slovenia@iaasworld.org', '1595239354247-slovenia.jpg', '\"Slovenia is situated in Central Europe touching the Alps and bordering the Mediterranean. The Alps — including the Julian Alps, the Kamnik-Savinja Alps and the Karavanke chain, as well as the Pohorje massif — dominate northern Slovenia along its long border to Austria. Slovenia’s Adriatic coastline stretches approximately 43 km from Italy to Croatia. On the Pannonian plain to the East and Northeast, toward the Croatian and Hungarian borders, the landscape is essentially flat. However, the majority of Slovenian terrain is hilly or mountainous, with around 90% of the surface 200 meters or more above sea level. Climate on the coast is humid subtropical, continental climate with mild to hot summers and cold winters in the plateaus and in the valleys to the east. Precipitation is high away from the coast, with the spring being particularly prone to rainfall. Slovenia’s Alps have frequent snowfalls during the winterTotal area of Slovenia is around 20 000 km².\n\n \"', 'Winter (December - February), Spring (March - May), Summer (June - August) and Autumn (September - November).', 'Visits of Ljubljana, Bled lake, Bohinj lake, Postojna cave and see side are the most common between tourists. This is not all, there are a lot of other interested things you can see if you don’t want to be a regular tourist.', NULL, 'English is needed, sometimes German is also OK.', NULL, 'Citizens of EPG countries (EU, Switzerland, Norway, Lichtenstein and Island) need only valid ID or passport. Citizens of other countries need to get visa from Slovenian diplomacy or consulate in their countries.', NULL, 'Our exchange week in the end of September. Also some other events if they are organized in the period when they are doing their internship in Slovenia.', NULL, 'If you want to come to Slovenia, please contact us early enough. If you decide to have an internship on request, we might not be able to fix you something if you don’t give us enough time.', '2020-07-20 10:02:34', '2020-07-20 10:02:34'),
(41, 3, 4, 3, 'South Africa', 'ZA', NULL, '', '', NULL, 'expro.southafrica@iaasworld.org', '1595239400916-southafrica.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 10:03:20', '2020-07-20 10:03:20'),
(42, 4, 1, 1, 'Spain', 'ES', 1, '', '', 'Carmen Martinez', 'expro.spain@iaasworld.org', '1595239483574-spain.jpg', '\"Spain is a country located in southwestern Europe on the Iberian Peninsula to the south of France and to the east of Portugal. It has coastlines on the Bay of Biscay, Atlantic Ocean) and Mediterranean Sea. As well as the mainland are the Balearic and the Canary Islands, the former located in the Mediterranean Sea and the latter in the Atlantic Ocean; and the autonomous cities Ceuta and Melilla; located in Africa.\nPopulation: 46,754,784\nCapital: Madrid\nBordering Areas: Andorra, France, Gibraltar, Portugal, Morocco (Ceuta and Melilla)\nArea: 505,370 sq km\nCoastline: 4,964 km\nHighest Point: Teide (Canary Islands) at 3,718 m\n\"', 'Winter, Spring, Autumn and Summer', '\"Explore the cities, with all their cultural, historical and recreation spots in the cities (Spain is the third country with the most World Heritage declarations). The biodiverse natural heritage from north to south, west to east (Spain is the European country with highest biodiversity).\nAnd of course, enjoy the food and overall: the people.\"', NULL, 'Spanish', NULL, 'No VISA needed for European Union countries and some other countries', NULL, 'All of them! International events and seminars, university parties, farm/companies visits…', 'Yes', NULL, '2020-07-20 10:04:43', '2020-07-20 10:04:43'),
(43, 6, 1, 1, 'Sweden', 'SE', 1, '', '', NULL, NULL, '1595239564356-sweden.jpg', 'Northern Europe', '4 seasons: winter, spring, summer and autumn. Mostly winter so bring warm clothes', 'Having a “Swedish fika”, enjoying winter sports like skiing and ice skating, hiking in the woods and the northern mountains, visit our old cities and Stockholms and Göteborgs archipelago.\n', NULL, 'Swedish is our official language but everyone understands and speaks English.', NULL, 'Schengen visa, details depend on the country. For more information visit: https://www.migrationsverket.se/English/Startpage.html', NULL, '\nActivities arranged by our student union, Ultuna Studentkår in Uppsala.', 'Yes', '\"Bring the right clothes for each season and be prepared for the long dark days during winter and bright nights during summer.\nWe are focused on finding internships based on request, so if there is a specific field or company you would like to intern with, please let us know!\"', '2020-07-20 10:06:04', '2020-07-20 10:06:04'),
(44, 6, 1, 1, 'Switzerland', 'CH', 1, '', '', 'Aurelia Varrone', 'expro.switzerland@iaasworld.org', '1595239669975-switzerland.jpg', 'different geographical regions such as the Alps, arable land, many lakes and rivers with clear water', 'Switzerland has four distinct seasons with low temperatures and snow in winter and temperatures up to 30°C in summer. Spring and autumn can be rather mild and sunny or cold and foggy.', 'As Switzerland is very small, a lot of sights can be visited within a short amount of time. Cities like Lucerne, Zurich and Bern are very popular and definitely worth a visit as they offer beautiful old towns with an interesting history. The Rigi, the Titlis, the Matterhorn or the Jungfrau are just a couple of the country\'s most beautiful mountains - the sheer amount of tourists on them would confirm that. Ask the ExCo team for more information and we will show you around :)', NULL, 'The four national languages are (Swiss) German, French, Italian and Rumansh. Almost everyone speaks English!', NULL, 'citizens of the European Union won\'t need a visa, other do', NULL, 'We will organise at least one day for all the interns to meet and explore Switzerland with ExCo and other members of the IAAS! Other than that, our committee has meetings every other week such as fun events like BBQ, get-togethers, parties and excursions that you could participate in!', NULL, 'good train and bus connections everywhere such as trams and sometimes boats in towns', '2020-07-20 10:07:50', '2020-07-20 10:07:50'),
(45, 3, 2, 1, 'Taiwan', 'TW', 1, '', '', 'David Chiang', 'expro.taiwan@iaasworld.org', '1595239758672-taiwan.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 10:09:18', '2020-07-20 10:09:18'),
(46, 1, 4, 1, 'Togo', 'TG', 1, '', '', 'Abigail Abra Anibri', 'expro.togo@iaasworld.org', '1595239808805-togo.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 10:10:08', '2020-07-20 10:10:08'),
(47, 2, 4, 1, 'Tunisia', 'TN', 1, '', '', 'Souha Slama', 'expro.tunisia@iaasworld.org', '1595239891276-tunisia.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 10:11:31', '2020-07-20 10:11:31'),
(48, 3, 1, 3, 'Turkey', 'TR', NULL, '', '', 'Shahnoza Khan Tilabaeva', 'expro.turkey@iaasworld.org', '1595239948669-turkey.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 10:12:29', '2020-07-20 10:12:29'),
(49, 2, 4, 2, 'Uganda', 'UG', NULL, '', '', NULL, 'expro.uganda@iaasworld.org', '1595239991080-uganda.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 10:13:11', '2020-07-20 10:13:11'),
(50, 2, 1, 3, 'Ukraine', 'UA', NULL, '', '', 'Tatiana Milantieva', 'expro.ukraine@iaasworld.org', '1595240051566-ukraina.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 10:14:11', '2020-07-20 10:14:11'),
(51, 4, 3, 2, 'Uruguay', 'UY', NULL, '', '', NULL, 'expro.uruguay@iaasworld.org', '1595240095690-urugvaj.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 10:14:55', '2020-07-20 10:14:55'),
(52, 6, 3, 1, 'USA', 'US', 1, '', '', 'Jensina Davis', 'expro.zimbabwe@iaasworld.org', '1595240181850-usa.jpg', 'The United States has vastly different landscapes depending on where you go. The Midwest is flat with no mountains and the southern states have more rolling hills. Coastal states have more mountains and forests.', 'Summer (May-July) is hot and crops are in the ground; Fall (August-October) can get chilly and harvest is happening; Winter (November-February) is very cold with nothing in the ground but research being done; Spring (March-April) is warm with crops being planted!', 'Sporting events are a big deal in the US, along with going to apple orchards, pumpkin patches, hiking and visiting big cities. Also, exploring farmers markets and going bowling or miniature golf, along with billiards are popular things to do.', NULL, 'English is mandatory', NULL, 'European and American countries are likely to be accepted visas, while some countries don’t need a visa or have an arrangement to come to the US. Those from African countries having left the continent at least once before have a better change of being granted a visa.', 'We have active committees in various regions in the US. The intern is more than welcome to come to the meetings and attend events, like visiting a local farm or events hosted by the committee.', NULL, 'Yes', 'We are more focused on finding internships based on request, so if there is a specific field or company you would like to intern with, please let us know!', '2020-07-20 10:16:22', '2020-07-20 10:16:22'),
(53, 2, 4, 1, 'Zimbabwe', 'ZW', NULL, '', '', 'NYASHA MATANGIRA', 'expro.zimbabwe@iaasworld.org', '1595240250733-zimbabve.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-07-20 10:17:30', '2020-07-20 10:17:30');

-- --------------------------------------------------------

--
-- Table structure for table `country_category`
--

DROP TABLE IF EXISTS `country_category`;
CREATE TABLE IF NOT EXISTS `country_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country_category`
--

INSERT INTO `country_category` (`id`, `name`, `description`, `updated`, `created`) VALUES
(1, 'A', 'A category', '2020-01-02 00:00:00', '2020-01-02 00:00:00'),
(2, 'B ', 'B category', '2020-01-02 00:00:00', '2020-01-02 00:00:00'),
(3, 'C', 'C category', '2020-01-02 00:00:00', '2020-01-02 00:00:00'),
(4, 'D', 'D category', '2020-01-02 00:00:00', '2020-01-02 00:00:00'),
(5, 'E', 'E category', '2020-01-02 00:00:00', '2020-01-02 00:00:00'),
(6, 'F', 'F category', '2020-07-20 01:34:56', '2020-07-20 01:34:56');

-- --------------------------------------------------------

--
-- Table structure for table `country_status`
--

DROP TABLE IF EXISTS `country_status`;
CREATE TABLE IF NOT EXISTS `country_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country_status`
--

INSERT INTO `country_status` (`id`, `name`, `description`, `updated`, `created`) VALUES
(1, 'Full', 'Full status', '2020-01-02 00:00:00', '2020-01-02 00:00:00'),
(2, 'Frozen', 'Frozen status ', '2020-01-02 00:00:00', '2020-01-02 00:00:00'),
(3, 'Candidate', 'Candidate', '2020-01-02 00:00:00', '2020-01-02 00:00:00'),
(4, 'Not an IAAS country', 'Not an IAAS country', '2020-10-12 16:19:24', '2020-10-12 16:19:24');

-- --------------------------------------------------------

--
-- Table structure for table `download`
--

DROP TABLE IF EXISTS `download`;
CREATE TABLE IF NOT EXISTS `download` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `image_path` varchar(200) NOT NULL,
  `download_path` text NOT NULL,
  `is_private` int(11) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `download`
--

INSERT INTO `download` (`id`, `category_id`, `title`, `description`, `image_path`, `download_path`, `is_private`, `updated`, `created`) VALUES
(1, 1, 'IAAS logos', 'Test', '1610636505078-20191005_173124.jpg', '1602513626406-pr02.zip', 0, '2021-01-14 15:01:49', '2020-07-13 08:50:06'),
(2, 1, 'IAAS Watermark', 'IAAS Watermark', '1610636517707-20191111_121140.jpg', '1595194196519-watermark.zip', 0, '2021-01-14 15:02:00', '2020-07-19 21:29:58'),
(3, 1, 'Fonts', 'Fonts', '1610636531358-20200103_231310.jpg', '1595194322016-fonts.zip', 0, '2021-01-14 15:02:13', '2020-07-19 21:32:30'),
(4, 1, 'Design Templates', 'Design Templates', '1610636545121-IMG-fc29d00010d2eedad3abeafeb8ff7d03-V.jpg', '1595194604364-design_templates.zip', 0, '2021-01-14 15:02:27', '2020-07-19 21:36:45'),
(5, 1, 'Sustainable Development Goals Icons', 'Sustainable Development Goals Icons', '1610636561405-20191025_175126.jpg', '1595194775732-SUSTAINABLE DEVELOPMENT GOALS ICONS-20200719T213403Z-001.zip', 0, '2021-01-14 15:02:43', '2020-07-19 21:39:37'),
(6, 1, 'Powerpoint Templates', 'Powerpoint Templates', '1610636581850-20200314_090538.jpg', '1595194958020-powerpoint.zip', 0, '2021-01-14 15:03:03', '2020-07-19 21:42:38'),
(7, 2, 'IAAS World Greenbook', 'IAAS World Greenbook', '1610636598612-sir.jpg', '1595195148451-IAAS World Greenbook.pdf', 0, '2021-01-14 15:03:20', '2020-07-19 21:46:05'),
(8, 2, 'IAAS Constitutional and By-Laws', 'IAAS Constitutional and By-Laws', '1595195239561-iaas-logo-vertical.png', '1595195245909-IAAS Constitutional and By-Laws 2019-2020.pdf', 0, '2020-07-19 21:47:26', '2020-07-19 21:47:26'),
(9, 2, 'IAAS Brand Guidelines', 'IAAS Brand Guidelines', '1595195358599-iaas-logo-vertical.png', '1595195336453-IAAS Brand Guidelines 2020.pdf', 0, '2020-07-19 21:49:19', '2020-07-19 21:49:19'),
(10, 2, 'IAAS ExPro Catalog', 'IAAS ExPro Catalog', '1595195404543-iaas-logo-vertical.png', '1595195410248-IAAS Catalog Exchange Program 1920.pdf', 0, '2020-07-19 21:50:11', '2020-07-19 21:50:11'),
(11, 2, 'IAAS World Startup Guide', 'IAAS World Startup Guide', '1595195446626-iaas-logo-vertical.png', '1595195434555-IAAS World Start-Up Guide.pdf', 0, '2020-07-19 21:50:48', '2020-07-19 21:50:48'),
(12, 3, 'Newsletter - 10/19', 'Newsletter - 10/19', '1595195785892-news_october.png', '1595195789884-Newsletter October Issue.pdf', 0, '2020-07-19 21:56:30', '2020-07-19 21:56:30'),
(13, 3, 'Newsletter - 11/19', 'Newsletter - 11/19', '1595195862052-news_november.png', '1595195866046-Newsletter November Issue.pdf', 0, '2020-07-19 21:57:46', '2020-07-19 21:57:46'),
(14, 3, 'Newsletter - 12/19', 'Newsletter - 12/19', '1595195929935-news_december.png', '1595195933291-Newsletter December Issue.pdf', 0, '2020-07-19 21:58:54', '2020-07-19 21:58:54'),
(15, 3, 'Test proizvodsada', 'Test A', '1597154346319-ap_full.jpg', '1597154351992-Naučne novine.pdf', 1, '2020-08-11 13:59:13', '2020-08-11 13:59:13'),
(16, 1, 't', 't', '1610200183187-firenet_for_black.jpg', '1610200192924-ExPro Catalog 2020.pdf', 0, '2021-01-09 13:49:57', '2021-01-09 13:49:57');

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
CREATE TABLE IF NOT EXISTS `faq` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `faq_category_id` int(11) NOT NULL,
  `faq_title` varchar(300) NOT NULL,
  `faq_content` text NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_FAQ_CATEGORY` (`faq_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`id`, `faq_category_id`, `faq_title`, `faq_content`, `updated`, `created`) VALUES
(2, 3, 'What is an Expro?', '<p>The IAAS exchange program – ‘Expro’- exists over 45 years and in this time, more than 20.000 students have been exchanged with IAAS. The IAAS exchange program gives opportunities to all students in countries where a recognised local committee of IAAS is active, to do a traineeship (internship) in another country. With ‘Expro’, you can learn and experience things that cannot be learned out of course books.</p><p>&nbsp;</p>', '2020-07-19 22:06:38', '2020-07-19 22:06:38'),
(3, 3, 'What is an Exco?', '<p>Each IAAS committee has at least one ExCo who is in charge of the organisation of the Exchange Program at your university and in your country. &nbsp;</p><p>Sending ExCo: the person you will be in contact with at your university and who will be working on the initial steps of the application process. &nbsp;</p><p>Receiving ExCo: the person you will be in contact with in your country of destination and who will be arranging the internship place.</p><p>&nbsp;</p>', '2020-07-19 22:07:14', '2020-07-19 22:07:14'),
(4, 3, 'What is the Exchange Quality Board?', '<p>This is a group of people, members of IAAS, who helps the Vice President of Exchange is his/her tasks. You can contact the EQB if you have difficulties in solving a problem on the local level of IAAS. Contact: eqb@iaasworld.org.</p><p>&nbsp;</p><p>International, national and local teams are working on ExPro, each with different objectives and focuses.</p><p>&nbsp;</p><p>&nbsp;&nbsp;</p><p>&nbsp;</p>', '2020-09-19 12:56:44', '2020-07-19 22:08:44'),
(5, 3, 'Why choose Expro ?', '<p>IAAS is the only international students association related to life sciences. An internship abroad with IAAS gives you the opportunity to meet people involved in the same field of study as you. You will be a part of the global network. Moreover, the internships are organised by students for students. The personalised contact with the local committees can help you to explore the country of destination as an insider which is a unique experience and a one in a lifetime opportunity!</p><p>&nbsp;</p>', '2020-07-19 22:16:06', '2020-07-19 22:16:06'),
(6, 3, 'What are the aims of Expro ?', '<ul><li>&nbsp;</li></ul><p>⦁ A positive learning experience.</p><p>⦁ Practical skills and knowledge in a foreign environment to complement their higher educational background.</p><p>⦁ Interaction with a different social and cultural environment with a view to gaining intercultural competences</p><p>⦁ Development of theoretical and practical leadership skills</p><p>⦁ Opportunity to apply their personal and professional skills, knowledge, attitudes and values to work for the organization as well as the host communities.</p><p>⦁ Develop the student’s awareness and knowledge of social issues and different practices of the sending and hosting country.</p><p>⦁ Opportunity to contribute to students personal and professional life goals</p><p>&nbsp;</p>', '2020-07-19 22:17:43', '2020-07-19 22:17:43'),
(7, 3, 'What are not the aims of Expro ?', '<p>⦁ To provide an opportunity for the purpose of earning money</p><p>⦁ To provide a holiday</p><p>⦁ Intended to be a permanent career placement or recruitment opportunity in another country. If the organization decides to extend the internship on a permanent basis, IAAS will have no role in facilitating this</p><p>⦁ A vehicle for any person to permanently leave their country. IAAS does not encourage the extension of internships beyond the limit of 12 month</p><p>&nbsp;</p>', '2020-07-19 22:18:14', '2020-07-19 22:18:14'),
(8, 4, 'Can I do an Expro ?', '<p>You can participate doing internships from the start of your study career in bio-science engineering or agronomy and until two years after you’ve graduated. <strong>You have to be coming from a country that is ‘full member’ or ‘Candidate member‘ of IAAS. Note that you have to accord with the working-visa restrictions of the country you are travelling to.</strong></p>', '2020-07-19 22:19:21', '2020-07-19 22:19:21'),
(9, 4, 'What are the different kinds of Expro I can apply for ?', '<p>There are three categories: &nbsp;</p><p>- Ceres: internships on farms &nbsp;</p><p>- Archimedes: education, research, engineering and management (universities and research institutions are perfect for this) &nbsp;</p><p>- Libertas: voluntary work, for the moment only exists in Indonesia and Morocco</p><p>&nbsp;</p>', '2020-07-19 22:20:18', '2020-07-19 22:20:18'),
(10, 4, 'What is the length of an Expro ?', '<p>The internship can last from 3 weeks up to 1 year.</p><p>&nbsp;</p>', '2020-07-19 22:20:39', '2020-07-19 22:20:39'),
(11, 4, 'Where can I go ?', '<p>There are two options to find a suitable internship: &nbsp;</p><p><strong>Fixed internships:</strong> On the website some available internships are provided. In your registration you can select your country of preference and interest. We suggest that you contact the National Exchange Coordinator to inform them that you’re interested in that specific internship. &nbsp;</p><p><strong>Internships on request:</strong> It is possible to request an internship in a specific field of interest or specific countries. Fill in the registration form and contact the National Exchange Coordinator/Regional Exchange Coordinator and inform them about your preferences. Keep in mind that the second option takes more time to arrange.</p><p>&nbsp;</p>', '2020-07-19 22:21:14', '2020-07-19 22:21:14'),
(12, 4, 'How much does it cost ?', '<p>The amount of the fee depends on your country category.</p><p>&nbsp;</p><p>Category &nbsp; &nbsp; Fee</p><p>A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;75 euros</p><p>B &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;75 euros</p><p>C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;100 euros</p><p>D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;100 euros</p><p>E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 100 euros</p><p>F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 100 euros</p><p>&nbsp;</p><p>If the sending ExCo charges any other extra costs this should be communicated beforehand. As a student, you have the right to inform the Exchange Quality Board about extra costs charged by your committee if you have any doubt or question about these higher costs. A receiving (hosting) committee is not allowed to charge trainees in any way, unless this has been specified in the internship offer.</p><p>&nbsp;</p><p>&nbsp;</p>', '2020-07-19 22:23:50', '2020-07-19 22:22:23'),
(13, 4, 'Will I receive salary, food or accommodation ?', '<p>It depends the internships, the information about salary, accommodation and food are specified in the website description of the internship. You can also ask to the Exco from the receiving country. In most cases the internships are unpaid (depends on the laws in each country), but we always ask the employer to give accommodation and food. If this doesn’t work out, you have to pay your own accommodation and food. It’s important to make this clear at the beginning of the negotiations with a company.</p><p>&nbsp;</p>', '2020-07-19 22:24:06', '2020-07-19 22:24:06'),
(14, 4, 'I found an internship spot, how do I apply ?', '<p>The application process is divided in three different status :</p><p>&nbsp;</p><p>Red status : It’s before you register into the website, are approved to participate in the exchange program and pay the participation fees</p><p>Orange status : It’s the process of application to an internship in particular with discussion with the receiving organism etc.</p><p>Green status : When your participation in the Expro is approved. It included your travel and the achievement of the internship</p><p>&nbsp;</p><p>A more detail timeline of the application process is detailed below.</p><p>&nbsp;</p>', '2020-07-19 22:24:36', '2020-07-19 22:24:36'),
(15, 4, 'My internship is cancelled or I didn’t find an internship, can I be refunded ?', '<p>The full amount can be recovered if no place was found for a student when the deadline passes. A student shall be refunded after the invoice has been obtained by the sending country. ExPro fee shall be paid back when: &nbsp;</p><p>⦁ Cancellation of application before an acceptance note has been given by the student. &nbsp;</p><p>⦁ Deadline of confirmation passed before being placed. &nbsp;</p><p>⦁ Cancellation of the placement by the receiving country.</p><p>&nbsp;</p>', '2020-07-19 22:25:45', '2020-07-19 22:24:52'),
(16, 4, 'My internship is confirmed, how can I get prepared ?', '<p>You have to prepare your personal insurance. The costs for insurance and visa as well as the cost of transport to and from the hosting country are on the charge of the trainee. You take the full responsibility of preparing these documents on time. &nbsp;</p><p>&nbsp;</p><p>You have to plan your lodging and food if they are not provided by the internship. If you need help are advises you can ask the receiving IAAS committee. &nbsp;</p><p>&nbsp;</p><p>For certain countries, it is necessary to get vaccinations, prophylaxis (e.g. against malaria). You should seek professional medical advice in advance. If there is no information about this in the ‘country specific information’ tab on the website, please contact the NExCo of the country you will visit.</p><p>&nbsp;</p><p>If you have allergies or if you suffer from chronic diseases, it is necessary to inform the accepting ExCo beforehand.</p><p>&nbsp;</p><p>During the traineeship, there will be other expenses, depending on activities in the hosting country. You have to bring enough money to provide for these expenses. &nbsp;</p><p>During the traineeship, you will have to integrate in another society. This takes effort on both sides, because cultural differences come into play. Therefore, every trainee and host should try to prepare an internship by learning more about the other culture, its customs and moral issues and if possible a little bit of the language.</p><p>&nbsp;</p><p>We strongly recommend that you inform yourself about the organization where the internship will take place. If they have a website, it is easy to find information about their activities and their goals and missions.</p><p>&nbsp;</p>', '2020-07-19 22:25:39', '2020-07-19 22:25:07'),
(17, 4, 'I have other questions, who can I contact ?', '<p>If you want to go on an internship, always try to contact your National or Local Exchange Coordinator. If you don’t get any response (due to inactivity or holiday period for example), you can contact the Regional Exchange Coordinator of your specific region. &nbsp;</p><p>&nbsp;</p><p>For general questions, you can consult the trainee guide which is at your disposal in the downloads section of the website. You can also contact eqb@iaasworld.org. The whole ExPro team is ready to help you and make the best out of your experience with our Exchange Program!</p><p>&nbsp;</p><p>Some useful adresses :</p><p>&nbsp;</p><p>Vice-president of Exchange: &nbsp; &nbsp;vpexchange@iaasworld.org &nbsp;</p><p>Exchange Quality Board: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;eqb@iaasworld.org &nbsp;</p><p>RExCo of Africa: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;expro.africa@iaasworld.org &nbsp;&nbsp;</p><p>RExCo of Americas: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;expro.americas@iaasworld.org &nbsp;</p><p>RExCo of Asia &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; expro.asia.pacific@iaasworld.org &nbsp;</p><p>RExCo of Europe &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; expro.europe@iaasworld.org &nbsp;</p><p>&nbsp;</p>', '2020-07-19 22:28:05', '2020-07-19 22:28:05'),
(18, 5, 'Which useful documents do I have at disposal ?', '<p>If you need information about Expro and your missions, you should read the Exco guide which gives detail about the Expro and its organisation. &nbsp;</p><p>&nbsp;</p><p>The Expro Catalogue contains the description of all the IAAS Expro places.</p><p>&nbsp;</p><p>The trainee guide explains Expro for an applicant.</p><p>&nbsp;</p><p>Partnership proposal and Expro presentation will help you to advertise the exchange program and contact new hosting places.</p><p>&nbsp;</p><p>You can find all these documents on the download part of the website.</p><p>&nbsp;</p>', '2020-07-19 22:28:47', '2020-07-19 22:28:47'),
(19, 5, 'What is the application process for an Expro ?', '<p>The application process is divided in three different status :</p><p>&nbsp;</p><p><strong>Red status:</strong> It’s before the trainee registers into the website, is approved to participate in the exchange program and pays the participation fees</p><p>&nbsp;</p><p><strong>Orange status:</strong> It’s the process of application to an internship in particular with discussion with the receiving organism etc.</p><p>&nbsp;</p><p><strong>Green status:</strong> When the participation in the Expro is approved. It included the travel and the achievement of the internship</p><p>&nbsp;</p><p>These are the main steps but you should consult the detailed timeline of the application process below.</p><p>&nbsp;</p>', '2020-07-19 22:29:28', '2020-07-19 22:29:28'),
(20, 5, 'What are my tasks as a sending Exco ?', '<p><strong>Make publicity:</strong> do this by informing students in person, by informing the student associations and by presentations. Also try to inform your university, because universities love to send their students on internships. &nbsp;</p><p>&nbsp;</p><p>When an interested student contacts you, you can explain him the basics of this program, give him the trainee guide, show him the way to our website and tell him he has to start his application online. Keep in mind that our website doesn’t work always as it should work. If that is the case, the student should contact the NExCo.</p><p>&nbsp;</p>', '2020-07-19 22:29:57', '2020-07-19 22:29:57'),
(21, 5, 'What are my tasks as a receiving Exco ?', '<p>The hardest, but most important job of the LExCos is to find internship places. When you found an internship, you can inform the quality board of exchange and enter it in the website.</p><p>&nbsp;</p><p>The other task you have as a receiving Exco is to organise the trainee selection and arrival. So, you will have to make an interview with him to check if he has the indicated skills (for example language). You will also provide him the Expro Guide, answer his questions and put him in contact with the receiving organisation. You should also confirm some steps of the application procedure on the website.</p><p>&nbsp;</p><p>Try to do activities with interns and secure that they are treated well at their internship. Help the interns when needed. You can do fun stuff with the trainee in his free time. The interns will experience this as a huge plus.</p><p>&nbsp;</p>', '2020-07-19 22:30:12', '2020-07-19 22:30:12'),
(22, 5, 'I don’t know how to find new internship places, do you have some tips ?', '<p>First of all: there are an infinite number of farms, companies, institutions and universities that can be contacted to arrange internships with. &nbsp;</p><p>&nbsp;</p><p>The best thing to start with, is to make a list of options by doing a brainstorm with the whole IAAS committee together. Just write down all options that come in mind. For example:</p><p>- Why not just contacting the dean or some professors that you like at your own university? They also have a bunch of contacts with companies. Just go talk with them during a class or send them an email. You will be surprised how much they like motivated and committed students. &nbsp;</p><p>- Why not contacting IAAS-alumni and/or university spin offs?</p><p>- Why not contacting farms or companies with family links in your own committee? &nbsp;</p><p>- Why not going to the local (organic) grocery store and ask them who their deliverers are? It’s easier to have personal contact and build trust when the farms our close to your place. &nbsp;</p><p>- Why not contacting delegations of companies at a job fair or just talk with the guide at a guided tour during an exchange week? &nbsp;</p><p>&nbsp;</p>', '2020-07-19 22:30:33', '2020-07-19 22:30:33'),
(23, 5, 'How to exactly contact the hosting places ?', '<p>At first, I would only give them a general introduction of who we are and what ExPro is in an email, or during a real talk. If they don’t answer the email (after 1-2 weeks), it’s a good idea to call them. You can hold calling sessions in a group, if you don’t like to call on your own. &nbsp;</p><p>&nbsp;</p><p>If they are interested, you can give them more information and ask about the exact conditions: What will be the job of the intern? For which period do you need an intern?… &nbsp;</p><p>&nbsp;</p><p>Further on, when you have enough information, you can set up a Contract farm/company-IAAS &nbsp;between you and the farm to settle down how you’re going to work together. In this stage, you can contact the NExCo: he will guide you in case you have questions.</p><p>&nbsp;</p>', '2020-07-19 22:31:11', '2020-07-19 22:31:11'),
(24, 5, 'Do we need contracts between IAAS and internship spots?', '<p>This is not absolutely necessary, but in this way it’s more clear that the company really wants to work with us and what we can expect from each other.</p><p>&nbsp;</p>', '2020-07-19 22:31:26', '2020-07-19 22:31:26'),
(25, 5, 'Do we as IAAS have to help the trainees with their visa an insurance applications?', '<p>This is the responsibility of the interns, but the more we help, the better our service is and the more the trainees will like us. So, help them if possible.</p>', '2020-07-19 22:31:42', '2020-07-19 22:31:42'),
(26, 5, 'Can contracts be signed digitally?', '<p>Yes, if all parties accept this.</p>', '2020-07-19 22:31:56', '2020-07-19 22:31:56'),
(27, 5, 'Can we accept people for our internship that aren’t student anymore?', '<p>The rule of IAAS world is that people can participate in ExPro until two years after they’ve graduated. Nevertheless,you have to respect the legislation of your country about free labour for non-student.</p><p>&nbsp;</p>', '2020-07-19 22:32:09', '2020-07-19 22:32:09'),
(28, 5, 'I have other questions, who can I contact ?', '<p>If you need more information about Expro and your missions, You should read the Exco guide which gives detail about the Expro and its organisation.</p><p>You can also contact your regional expro, the vice president of exchange or the quality board of exchange. They will be happy to answer your questions.</p><p>&nbsp;</p><p>Vice-president of Exchange: &nbsp;vpexchange@iaasworld.org &nbsp;</p><p>Exchange Quality Board: &nbsp; eqb@iaasworld.org &nbsp;</p><p>RExCo of Africa: &nbsp; &nbsp;expro.africa@iaasworld.org &nbsp;</p><figure class=\"table\"><table><tbody><tr><td>Test</td><td>Test</td></tr><tr><td>Test</td><td>Test</td></tr></tbody></table></figure><p>RExCo of Americas: &nbsp; expro.americas@iaasworld.org &nbsp;</p><p>RExCo of Asia: &nbsp; &nbsp;expro.asia.pacific@iaasworld.org &nbsp;</p><p>RExCo of Europe: &nbsp; expro.europe@iaasworld.org&nbsp;</p>', '2020-10-20 20:19:10', '2020-07-19 22:32:39');

-- --------------------------------------------------------

--
-- Table structure for table `faq_category`
--

DROP TABLE IF EXISTS `faq_category`;
CREATE TABLE IF NOT EXISTS `faq_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `icon_class` varchar(100) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `faq_category`
--

INSERT INTO `faq_category` (`id`, `title`, `description`, `icon_class`, `updated`, `created`) VALUES
(3, 'General Information', 'General Information', 'fa-info', '2020-07-19 22:06:17', '2020-07-19 22:06:17'),
(4, 'I want to do an Expro', 'I want to do an Expro', 'fa-user', '2020-07-19 22:18:58', '2020-07-19 22:18:58'),
(5, 'I\'m an Exco', 'I\'m an Exco', 'fa-address-book', '2020-07-19 22:28:20', '2020-07-19 22:28:20');

-- --------------------------------------------------------

--
-- Table structure for table `favourite_abroad`
--

DROP TABLE IF EXISTS `favourite_abroad`;
CREATE TABLE IF NOT EXISTS `favourite_abroad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `study_abroad_id` int(11) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `favourite_abroad`
--

INSERT INTO `favourite_abroad` (`id`, `user_id`, `study_abroad_id`, `updated`, `created`) VALUES
(7, 42, 1, '2020-09-12 14:35:53', '2020-09-12 14:35:53');

-- --------------------------------------------------------

--
-- Table structure for table `favourite_blog`
--

DROP TABLE IF EXISTS `favourite_blog`;
CREATE TABLE IF NOT EXISTS `favourite_blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `updated` date NOT NULL,
  `created` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `favourite_internship`
--

DROP TABLE IF EXISTS `favourite_internship`;
CREATE TABLE IF NOT EXISTS `favourite_internship` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `internship_id` int(11) NOT NULL,
  `updated` int(11) NOT NULL,
  `created` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `internship`
--

DROP TABLE IF EXISTS `internship`;
CREATE TABLE IF NOT EXISTS `internship` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `type_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `op_taker_id` int(11) DEFAULT NULL,
  `description` text,
  `backgrounds` varchar(50) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `food` smallint(6) DEFAULT NULL,
  `meals_per_day` smallint(6) DEFAULT NULL,
  `accomodation` smallint(6) DEFAULT NULL,
  `gender` smallint(6) DEFAULT NULL,
  `working_hours` int(11) DEFAULT NULL,
  `working_hours_per_week` int(11) DEFAULT NULL,
  `salary` smallint(6) DEFAULT NULL,
  `salary_info` double DEFAULT NULL,
  `contract` smallint(6) DEFAULT NULL,
  `spot_availability` varchar(20) DEFAULT NULL,
  `students_number` int(11) DEFAULT NULL,
  `min_length` int(11) DEFAULT NULL,
  `max_length` int(11) DEFAULT NULL,
  `languages` varchar(50) DEFAULT NULL,
  `little_experience` smallint(6) DEFAULT NULL,
  `driving_licence` smallint(6) DEFAULT NULL,
  `driving_tractor` smallint(6) DEFAULT NULL,
  `fit` smallint(6) DEFAULT NULL,
  `social_aspects` text,
  `other` text,
  `first_image_path` varchar(200) DEFAULT NULL,
  `is_featured` int(11) DEFAULT NULL,
  `is_shown` int(11) NOT NULL DEFAULT '1',
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_OP_TAKER_INTERN` (`op_taker_id`),
  KEY `FK_INTERN_COUNTRY` (`country_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `internship`
--

INSERT INTO `internship` (`id`, `name`, `type_id`, `country_id`, `op_taker_id`, `description`, `backgrounds`, `duration`, `food`, `meals_per_day`, `accomodation`, `gender`, `working_hours`, `working_hours_per_week`, `salary`, `salary_info`, `contract`, `spot_availability`, `students_number`, `min_length`, `max_length`, `languages`, `little_experience`, `driving_licence`, `driving_tractor`, `fit`, `social_aspects`, `other`, `first_image_path`, `is_featured`, `is_shown`, `updated`, `created`) VALUES
(1, 'Test', 1, 6, 1, 'sdasdas', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Test', 2, 5, 1, 'xsdas\n\nxnasklxlasnklnakxna\n\n\nxnasklnxksnxklsnknxkanlxksnakxn\n\n\nnalsnklnckancknaklsnakc\n\n\ncasklncklsklnscknaklcnklanscklnka\n\nascnsnc', '', NULL, 1, 1, 1, NULL, 12, 100, NULL, NULL, 1, '1', 4, 19, 1999, '', NULL, NULL, 1, 1, 'sdadsa', 'sdas', NULL, 0, 1, '2021-01-16 15:18:05', '2020-11-30 19:15:32'),
(3, 'In 1 Germany', 1, 1, 1, '-', '', NULL, 0, NULL, 0, 3, 1, NULL, NULL, NULL, NULL, NULL, 2, 5, 10, '', NULL, NULL, NULL, NULL, '-', '-', NULL, NULL, 0, '2021-01-05 17:40:11', '2020-12-18 07:49:15'),
(4, 'Rd intern', 1, 5, 1, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, '2021-01-05 17:40:40', '2020-12-18 08:11:31'),
(5, 'Exco internship ', 1, 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, '2020-12-18 08:22:58', '2020-12-18 08:22:58'),
(6, 'ND 1', 2, 1, 1, NULL, '', NULL, NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, NULL, NULL, 6, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2021-01-05 17:22:10', '2020-12-18 08:30:43'),
(7, 'Test all', 2, 1, 1, 'desc', 'My test', NULL, 1, 2, 1, 1, 5, NULL, 1, 500, 1, '12/12 - 12/12', 3, 10, 20, '1', 1, 1, 1, 1, 'social', 'any', NULL, NULL, 1, '2020-12-19 08:57:49', '2020-12-19 08:57:49'),
(8, 'Ecuador', 2, 17, 1, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2021-01-05 13:42:37', '2021-01-05 13:42:37'),
(9, 'Bangladesh', 3, 7, 1, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 100, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, '2021-01-24 18:44:28', '2021-01-05 13:43:20'),
(10, 'Chile', 1, 12, 1, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2021-01-05 13:47:48', '2021-01-05 13:47:48'),
(11, 'No OP Taker', 3, 1, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2021-01-09 12:03:02', '2021-01-09 12:03:02'),
(12, 'test 15.01.', 1, 37, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, 3, 11, NULL, NULL, 1, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2021-01-15 15:06:01', '2021-01-15 15:00:27');

-- --------------------------------------------------------

--
-- Table structure for table `internship_image`
--

DROP TABLE IF EXISTS `internship_image`;
CREATE TABLE IF NOT EXISTS `internship_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `internship_id` int(11) NOT NULL,
  `image_path` text NOT NULL,
  `updated` date NOT NULL,
  `created` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `internship_image`
--

INSERT INTO `internship_image` (`id`, `internship_id`, `image_path`, `updated`, `created`) VALUES
(1, 1, '1602665894386-20191005_173134.jpg', '2020-12-19', '2020-12-19'),
(2, 2, '1602665894386-20191005_173134.jpg', '2020-12-19', '2020-12-19'),
(3, 3, '1602665894386-20191005_173134.jpg', '2020-12-19', '2020-12-19'),
(4, 4, '1602665894386-20191005_173134.jpg', '2020-12-19', '2020-12-19'),
(5, 5, '1602154802816-firenet_for_black.jpg', '2020-12-19', '2020-12-19'),
(6, 6, '1602153708682-ourlastpresentation.png', '2020-12-19', '2020-12-19'),
(7, 9, '1611513883409-avatar.jpg', '2021-01-24', '2021-01-24');

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
CREATE TABLE IF NOT EXISTS `language` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `language`
--

INSERT INTO `language` (`id`, `name`, `description`, `updated`, `created`) VALUES
(1, 'English', 'English', '2020-07-20 11:10:45', '2020-07-20 11:10:45'),
(2, 'German', 'German', '2020-07-20 11:10:52', '2020-07-20 11:10:52'),
(3, 'Dutch', 'Dutch', '2020-07-20 11:10:57', '2020-07-20 11:10:57'),
(4, 'Spanish', 'Spanish', '2020-07-20 11:11:03', '2020-07-20 11:11:03'),
(5, 'Portuguese', 'Portuguese', '2020-07-20 11:11:11', '2020-07-20 11:11:11'),
(6, 'French', 'French', '2020-07-20 11:11:18', '2020-07-20 11:11:18');

-- --------------------------------------------------------

--
-- Table structure for table `op_taker`
--

DROP TABLE IF EXISTS `op_taker`;
CREATE TABLE IF NOT EXISTS `op_taker` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `logo` varchar(1000) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `website` varchar(100) DEFAULT NULL,
  `region` varchar(200) DEFAULT NULL,
  `town` varchar(200) DEFAULT NULL,
  `about_us` text,
  `fb_link` varchar(200) DEFAULT NULL,
  `tw_link` varchar(200) DEFAULT NULL,
  `ig_link` varchar(200) DEFAULT NULL,
  `lk_link` varchar(200) DEFAULT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_OPTAKER_USER` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `op_taker`
--

INSERT INTO `op_taker` (`id`, `user_id`, `name`, `logo`, `type`, `website`, `region`, `town`, `about_us`, `fb_link`, `tw_link`, `ig_link`, `lk_link`, `updated`, `created`) VALUES
(1, 45, 'FIRENET', '1603564497597-iaastest.jpg', 'Other', 'https://www.firenet.me', 'Montenegro', 'Bar', 'About firenet', NULL, NULL, NULL, NULL, '2020-10-24 18:35:00', '2020-10-24 18:28:59'),
(4, 51, NULL, '1608277221543-1.jpg', 'Farm', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-18 07:40:21', '2020-12-18 07:40:05'),
(5, 52, NULL, '1608278988505-dobro_jutro.jpg', 'University', 'www.rd1.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-18 08:09:48', '2020-12-18 08:09:10'),
(6, 53, NULL, '1608279351634-1.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2020-12-18 08:15:51', '2020-12-18 08:15:34');

-- --------------------------------------------------------

--
-- Table structure for table `op_taker_contact`
--

DROP TABLE IF EXISTS `op_taker_contact`;
CREATE TABLE IF NOT EXISTS `op_taker_contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `op_taker_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `country_id` int(11) NOT NULL,
  `town` varchar(100) NOT NULL,
  `phone_number` varchar(100) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_OPTAKER_CONTACT` (`op_taker_id`),
  KEY `FK_CONTACT_COUNTRY` (`country_id`)
) ENGINE=InnoDB AUTO_INCREMENT=257 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `op_taker_contact`
--

INSERT INTO `op_taker_contact` (`id`, `op_taker_id`, `name`, `email`, `country_id`, `town`, `phone_number`, `updated`, `created`) VALUES
(256, 1, 'Aleksandar Plamenac', 'test@test.com', 5, 'fsdf', '+382 67 349 333', '2020-10-24 18:47:10', '2020-10-24 18:46:51');

-- --------------------------------------------------------

--
-- Table structure for table `page`
--

DROP TABLE IF EXISTS `page`;
CREATE TABLE IF NOT EXISTS `page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `page`
--

INSERT INTO `page` (`id`, `name`, `description`, `updated`, `created`) VALUES
(1, 'content_hub', 'Content Hub', '2021-01-31 00:00:00', '2021-01-31 00:00:00'),
(2, 'alumni', 'Alumni', '2021-01-31 00:00:00', '2021-01-31 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `page_article_category`
--

DROP TABLE IF EXISTS `page_article_category`;
CREATE TABLE IF NOT EXISTS `page_article_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `page_id` int(11) NOT NULL,
  `article_category_id` int(11) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `page_article_category_page_fk` (`page_id`),
  KEY `page_article_category_article_category_fk` (`article_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `page_article_category`
--

INSERT INTO `page_article_category` (`id`, `page_id`, `article_category_id`, `updated`, `created`) VALUES
(1, 1, 1, '2021-01-31 00:00:00', '2021-01-31 00:00:00'),
(2, 1, 3, '2021-01-31 00:00:00', '2021-01-31 00:00:00'),
(3, 1, 4, '2021-01-31 00:00:00', '2021-01-31 00:00:00'),
(4, 1, 5, '2021-01-31 00:00:00', '2021-01-31 00:00:00'),
(5, 2, 11, '2021-01-31 00:00:00', '2021-01-31 00:00:00'),
(6, 1, 2, '2021-01-31 00:00:00', '2021-01-31 00:00:00'),
(7, 1, 6, '2021-01-31 00:00:00', '2021-01-31 00:00:00'),
(8, 1, 7, '2021-01-31 00:00:00', '2021-01-31 00:00:00'),
(9, 1, 8, '2021-01-31 00:00:00', '2021-01-31 00:00:00'),
(10, 1, 9, '2021-01-31 00:00:00', '2021-01-31 00:00:00'),
(11, 1, 10, '2021-01-31 00:00:00', '2021-01-31 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

DROP TABLE IF EXISTS `partner`;
CREATE TABLE IF NOT EXISTS `partner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `description` text,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `website` text,
  `image_path` varchar(500) NOT NULL,
  `study_abroad` int(11) NOT NULL,
  `is_shown` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_PARTNER_COUNTRY` (`country_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `partner`
--

INSERT INTO `partner` (`id`, `name`, `description`, `updated`, `created`, `country_id`, `website`, `image_path`, `study_abroad`, `is_shown`) VALUES
(1, 'FIRENET', 'asfasda', '2020-09-21 09:02:31', '2020-09-08 14:45:56', 5, 'http://www.firenet.me', '1599903158168-firenet_logo.png', 1, 1),
(2, 'In 1 Germany', 'Desc 1', '2020-12-18 07:08:00', '2020-12-18 07:08:00', 1, 'www.ger1.com', '1608275256925-1.jpg', 1, 1),
(3, 'Afrika 1', 'Afrika 1', '2020-12-18 08:14:34', '2020-12-18 08:14:34', 28, NULL, '1608279272999-1.jpg', 0, 1),
(4, 'Afrika par 1', 'Afrika par 1', '2020-12-18 08:15:09', '2020-12-18 08:15:09', 28, 'www.afr2.com', '1608279307997-1.jpg', 1, 0),
(5, 'Exco partner 1', 'Exco partner 1 updated', '2020-12-18 08:21:33', '2020-12-18 08:21:19', 1, 'www.excopartner.com', '1608279678060-1.png', 0, 0),
(6, 'ND partner', 'ND desc update', '2020-12-18 08:28:41', '2020-12-18 08:28:33', 1, 'www.nd.com', '1608280112834-1598274940742-megane_7.jpg', 0, 0),
(7, 'o', 'o', '2021-01-16 14:12:16', '2021-01-16 14:12:16', 8, 'o', '1610806332870-20191111_225830.jpg', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
CREATE TABLE IF NOT EXISTS `region` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `description` text,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `region`
--

INSERT INTO `region` (`id`, `name`, `description`, `updated`, `created`) VALUES
(1, 'Europe', 'Europe region', '2020-01-02 00:00:00', '2020-01-02 00:00:00'),
(2, 'Asia-Pacific', 'Asia-Pacific region', '2020-01-02 00:00:00', '2020-01-02 00:00:00'),
(3, 'Americas', 'Americas region', '2020-01-02 00:00:00', '2020-01-02 00:00:00'),
(4, 'Africa', 'Africa region', '2020-01-02 00:00:00', '2020-01-02 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `reset_password_request`
--

DROP TABLE IF EXISTS `reset_password_request`;
CREATE TABLE IF NOT EXISTS `reset_password_request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `guid` text NOT NULL,
  `is_served` int(11) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reset_password_request`
--

INSERT INTO `reset_password_request` (`id`, `email`, `guid`, `is_served`, `updated`, `created`) VALUES
(13, 'aleksandar.plamenac93@gmail.com', 'bbfe6c33-6143-41b4-a124-e94f2f680782', 0, '2020-10-25 20:38:05', '2020-10-25 20:38:05'),
(14, 'aleksandar.plamenac93@gmail.com', '96660008-a882-4758-96f2-2860c497c56c', 0, '2020-10-25 21:07:59', '2020-10-25 21:07:59'),
(15, 'aleksandar.plamenac93@gmail.com', '4a89d5d1-990f-49d2-93d2-4ec590414012', 1, '2020-10-25 21:31:42', '2020-10-25 21:20:59'),
(16, 'aleksandar.plamenac93@gmail.com', '8ef78232-88e1-4b02-87d4-94c79586b1d9', 0, '2020-10-25 21:36:42', '2020-10-25 21:36:42'),
(17, 'aleksandar.plamenac93@gmail.com', '8767929a-4eb9-489b-a41d-37c7e37639e5', 1, '2020-10-25 21:37:03', '2020-10-25 21:36:42'),
(18, 'aleksandar.plamenac93@gmail.com', 'b75dcfdf-d9ac-4c90-a3b8-0befe19cd33d', 1, '2020-10-25 21:38:50', '2020-10-25 21:38:35'),
(19, 'aleksandar.plamenac93@gmail.com', '3009d8e1-c447-4c45-ba52-7783e24b7565', 1, '2020-10-25 21:40:09', '2020-10-25 21:39:46');

-- --------------------------------------------------------

--
-- Table structure for table `sponsor`
--

DROP TABLE IF EXISTS `sponsor`;
CREATE TABLE IF NOT EXISTS `sponsor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `description` text,
  `website` text,
  `image_path` varchar(100) NOT NULL,
  `updated` datetime DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `is_shown` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_SPONSOR_COUNTRY` (`country_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sponsor`
--

INSERT INTO `sponsor` (`id`, `name`, `description`, `website`, `image_path`, `updated`, `created`, `country_id`, `is_shown`) VALUES
(5, 'Test sponsor', 'Test description', 'http://www.firenet.me', '1600517990643-test.png', '2020-10-12 14:12:14', '2020-09-19 12:19:52', 5, 2),
(6, 'Sponsor 1', 'Description 1', 'www.desc.com', '1608274820600-1605122239265-iaastest.jpg', '2020-12-18 07:00:38', '2020-12-18 07:00:38', 1, 1),
(7, 'Sponsor 1 rd', 'Description 1 rd', 'www.rdsponsor.com', '1608279167127-1598274940742-megane_7.jpg', '2020-12-18 08:12:48', '2020-12-18 08:12:48', 5, 0),
(8, 'Exco 1', 'Exco 1', 'www.exco.com', '1608279555385-1.png', '2020-12-18 08:19:17', '2020-12-18 08:19:17', 1, 0),
(9, 'ND sponsor 1', 'desc', 'www.ndsponsor1.com', '1608279952952-1598274940742-megane_7.jpg', '2020-12-18 08:27:19', '2020-12-18 08:25:53', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `phone_number` varchar(50) DEFAULT NULL,
  `university` varchar(50) DEFAULT NULL,
  `ec_name` varchar(100) DEFAULT NULL,
  `ec_surname` varchar(100) DEFAULT NULL,
  `ec_address` text,
  `ec_relation` text,
  `ec_email` varchar(100) DEFAULT NULL,
  `ec_phone` varchar(100) DEFAULT NULL,
  `health_issues` text,
  `iaas_member` smallint(6) DEFAULT NULL,
  `expro_info` int(11) DEFAULT NULL,
  `image_path` varchar(200) DEFAULT NULL,
  `bio_path` varchar(200) DEFAULT NULL,
  `proof_path` varchar(200) DEFAULT NULL,
  `emails` smallint(6) DEFAULT NULL,
  `linkedIn` varchar(200) DEFAULT NULL,
  `biography` text,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_STUDENT_USER` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `user_id`, `phone_number`, `university`, `ec_name`, `ec_surname`, `ec_address`, `ec_relation`, `ec_email`, `ec_phone`, `health_issues`, `iaas_member`, `expro_info`, `image_path`, `bio_path`, `proof_path`, `emails`, `linkedIn`, `biography`, `updated`, `created`) VALUES
(3, 66, '123', 'MNE', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-01-09 12:01:18', '2021-01-09 12:01:18');

-- --------------------------------------------------------

--
-- Table structure for table `study_abroad_image`
--

DROP TABLE IF EXISTS `study_abroad_image`;
CREATE TABLE IF NOT EXISTS `study_abroad_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `study_abroad_program_id` int(11) NOT NULL,
  `path` text NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `study_abroad_image`
--

INSERT INTO `study_abroad_image` (`id`, `study_abroad_program_id`, `path`, `updated`, `created`) VALUES
(7, 1, '1599903390063-firenet_logo.png', '2020-09-12 09:36:30', '2020-09-12 09:36:30'),
(8, 1, '1599903425082-test9.jpg', '2020-09-12 09:37:05', '2020-09-12 09:37:05'),
(9, 2, '1610806591058-20191111_225830.jpg', '2021-01-16 14:16:31', '2021-01-16 14:16:31'),
(11, 3, '1610806902564-IMG-a75871228f47e24e2508f5e8911ad1f7-V.jpg', '2021-01-16 14:21:42', '2021-01-16 14:21:42'),
(12, 3, '1610806967592-20200209_115703.jpg', '2021-01-16 14:22:47', '2021-01-16 14:22:47'),
(13, 4, '1610807003219-IMG-3bbf3823f1477dfb47968a6f704eff65-V.jpg', '2021-01-16 14:23:23', '2021-01-16 14:23:23'),
(15, 6, '1610807383461-IMG-3dad1338d4d08794d121466da0af890b-V.jpg', '2021-01-16 14:29:43', '2021-01-16 14:29:43');

-- --------------------------------------------------------

--
-- Table structure for table `study_abroad_program`
--

DROP TABLE IF EXISTS `study_abroad_program`;
CREATE TABLE IF NOT EXISTS `study_abroad_program` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `partner_id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `location` text NOT NULL,
  `video_link` text NOT NULL,
  `about` text NOT NULL,
  `site_link` varchar(200) NOT NULL,
  `apply_link` varchar(200) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`,`apply_link`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `study_abroad_program`
--

INSERT INTO `study_abroad_program` (`id`, `partner_id`, `title`, `description`, `location`, `video_link`, `about`, `site_link`, `apply_link`, `updated`, `created`) VALUES
(1, 1, 'Computer programming internship', 'Interested in computer programming? Come join us for free! ', 'Podgorica, Montenegro', 'https://www.youtube.com/embed/ez0_t22eTIM', '<p>This is the most great internship for someone who is in Agriculture!</p><p>&nbsp;</p>', 'http://www.firenet.me', 'http://www.firenet.me', '2020-09-12 10:13:26', '2020-09-08 14:59:30'),
(6, 4, 't', 't', 't', 't', '<p>t</p>', 't', 't', '2021-01-16 14:29:36', '2021-01-16 14:29:36');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_type_id` int(11) NOT NULL,
  `region_id` int(11) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `original_country_code` varchar(2) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `hashed_password` varchar(500) DEFAULT NULL,
  `is_active` int(11) NOT NULL,
  `changed_pass` int(11) NOT NULL DEFAULT '0',
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_USER_COUNTRY` (`country_id`),
  KEY `FK_USER_TYPE` (`user_type_id`),
  KEY `FK_REGION` (`region_id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_type_id`, `region_id`, `country_id`, `original_country_code`, `first_name`, `last_name`, `email`, `hashed_password`, `is_active`, `changed_pass`, `updated`, `created`) VALUES
(42, 6, NULL, 6, '', 'Omar', 'Farhate', 'president@iaasworld.org', '8724fbbbd41fce82f28b3eeabc1ad21dfa54f46e5b5d6ca8a0a5384a56c6bb15417bc12de494b8ab2637b84381935024815000fb9bce954ab7338ce26e77c230', 1, 0, '2020-09-08 22:17:58', '2020-09-09 00:09:47'),
(43, 7, 1, NULL, '', NULL, '', 'region1@test.com', '5a8116f251fcb6f76cf7151b254bbc9aef72f092626f8bcc5336ca6eff19602362504d62802d976f152def01085155dcf52816aea11e3e904665bdaff91562f3', 1, 1, '2020-09-23 09:02:28', '2020-09-19 06:33:51'),
(45, 2, NULL, 33, '', 'FIRENET', '', 'aleksandar.plamenac@firenet.me', 'd8f9c1b0f11b0f3e715b29f23272b64d4e1d98454168566ad9bd8fc198c78622814ffb965d44f56f133fdb2f1848bb4e6f5b74ab4d08fb4a3031393601e32bc8', 1, 0, '2020-10-24 18:28:58', '2020-10-24 18:28:58'),
(47, 7, 2, NULL, '', NULL, '', 'reasia@iaasworld.org', '8724fbbbd41fce82f28b3eeabc1ad21dfa54f46e5b5d6ca8a0a5384a56c6bb15417bc12de494b8ab2637b84381935024815000fb9bce954ab7338ce26e77c230', 0, 0, '2020-11-11 21:15:35', '2020-11-11 21:15:35'),
(49, 2, NULL, 1, NULL, 'Test', '', 'test@test.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 07:27:18', '2020-12-18 07:27:18'),
(51, 2, NULL, 6, NULL, 'Austria 1', '', 'test@test.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 07:40:05', '2020-12-18 07:40:05'),
(52, 2, NULL, 1, NULL, 'Rd 1', '', 'rd1@rd.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 1, 0, '2020-12-18 08:09:10', '2020-12-18 08:09:10'),
(53, 2, NULL, 28, NULL, 'Mali', '', 'mali@mali.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 08:15:34', '2020-12-18 08:15:34'),
(54, 2, NULL, 1, NULL, 'Exco 1', '', 'exco@exco.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 08:19:47', '2020-12-18 08:19:47'),
(55, 2, NULL, NULL, NULL, 'Nesto', '', 'nesto@nesto.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 12:06:24', '2020-12-18 12:06:24'),
(56, 2, NULL, 1, NULL, 'Neki', '', 'neki@neki.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 1, 0, '2020-12-18 17:07:07', '2020-12-18 17:07:07'),
(57, 2, NULL, 1, NULL, 'M', '', 'm@m.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 17:09:48', '2020-12-18 17:09:48'),
(58, 2, NULL, 1, NULL, 'a', '', 'a@a.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 17:11:22', '2020-12-18 17:11:22'),
(59, 2, NULL, NULL, NULL, 'b', '', 'b@b.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 17:14:02', '2020-12-18 17:14:02'),
(60, 2, NULL, 1, NULL, 'M', '', 'c@c.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 17:19:46', '2020-12-18 17:19:46'),
(61, 2, NULL, 1, NULL, 'D', '', 'd@d.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 17:20:31', '2020-12-18 17:20:31'),
(62, 2, NULL, NULL, NULL, 'v', '', 'v@v.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 17:21:56', '2020-12-18 17:21:56'),
(63, 2, NULL, 1, NULL, 'M', '', 'm@m.com', '863cfc6635fe005b927b563d19ae94a7b4a761993e0d24641dc94251ff2a47c223ff0cb51253c849f967d751df427dfc4c821a148ab4d6cd5b6c679d6a050ee3', 0, 0, '2020-12-18 17:24:47', '2020-12-18 17:24:47'),
(64, 2, NULL, 8, NULL, 'MM', '', 'mmmmm@m.com', '1146e5eb4d61f1d1746494ff6a6eccdeaaac9841b33831c56906aa4b7fb489c7d046fb779e23a0ba9ca3b9ce7b73c4692ce763aa34d11d1ded387280908cfc93', 0, 0, '2020-12-19 16:18:06', '2020-12-19 16:18:06'),
(66, 4, 2, 1, 'CS', 'Milena', 'Plamenac', 'milenaplaam@yahoo.com', '1146e5eb4d61f1d1746494ff6a6eccdeaaac9841b33831c56906aa4b7fb489c7d046fb779e23a0ba9ca3b9ce7b73c4692ce763aa34d11d1ded387280908cfc93', 1, 0, '2021-01-09 12:01:18', '2021-01-09 12:01:18');

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
CREATE TABLE IF NOT EXISTS `user_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_type`
--

INSERT INTO `user_type` (`id`, `name`, `description`, `updated`, `created`) VALUES
(1, 'Student', 'Student\'s type of profile', '2020-03-06 00:00:00', '2020-03-06 00:00:00'),
(2, 'OP taker', 'OP taker\'s type of profile', '2020-03-06 00:00:00', '2020-03-06 00:00:00'),
(3, 'Administrator', 'Administrator type', '2020-03-06 00:00:00', '2020-03-06 00:00:00'),
(4, 'Executive Board', 'This is Executive Board user type', '2020-08-11 16:05:07', '2020-08-11 16:05:07'),
(5, 'National Director', 'National Director user type', '2020-08-18 11:56:06', '2020-08-18 11:56:06'),
(6, 'Exchange Coordinator', 'Exchange Coordinator user type', '2020-08-18 11:56:34', '2020-08-18 11:56:34'),
(7, 'Regional Director', 'Regional Director User Type', '2020-09-19 08:31:49', '2020-09-19 08:31:49');

-- --------------------------------------------------------

--
-- Table structure for table `voting`
--

DROP TABLE IF EXISTS `voting`;
CREATE TABLE IF NOT EXISTS `voting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `description` text,
  `is_active` tinyint(4) NOT NULL DEFAULT '1',
  `date_of_start` date NOT NULL,
  `date_of_end` date NOT NULL,
  `voting_type_id` int(11) NOT NULL,
  `region_id` int(11) DEFAULT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `voting_voting_type_fk` (`voting_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `voting`
--

INSERT INTO `voting` (`id`, `name`, `description`, `is_active`, `date_of_start`, `date_of_end`, `voting_type_id`, `region_id`, `updated`, `created`) VALUES
(2, 'Voting 1', NULL, 1, '2021-01-31', '2021-02-06', 1, NULL, '2021-01-29 11:46:42', '2021-01-21 00:00:00'),
(3, 'Voting 2', 'Voting 2', 0, '2021-01-24', '2021-01-30', 2, 2, '2021-01-21 08:42:23', '2021-01-21 08:42:19'),
(7, 'Milena', NULL, 0, '2021-02-01', '2021-02-04', 1, NULL, '2021-01-29 11:17:17', '2021-01-29 11:17:17'),
(8, 'p', NULL, 0, '2021-01-31', '2021-02-05', 2, 1, '2021-01-29 11:20:27', '2021-01-29 11:20:27'),
(9, 'Afrika 1', NULL, 0, '2021-01-03', '2021-01-13', 1, NULL, '2021-01-29 11:22:34', '2021-01-29 11:22:34');

-- --------------------------------------------------------

--
-- Table structure for table `voting_answer`
--

DROP TABLE IF EXISTS `voting_answer`;
CREATE TABLE IF NOT EXISTS `voting_answer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `voting_question_id` int(11) NOT NULL,
  `voting_question_option_id` int(11) DEFAULT NULL,
  `answer` varchar(1000) DEFAULT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `voting_answer_voting_question_fk` (`voting_question_id`),
  KEY `voting_answer_voting_question_option_fk` (`voting_question_option_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `voting_answer`
--

INSERT INTO `voting_answer` (`id`, `voting_question_id`, `voting_question_option_id`, `answer`, `updated`, `created`) VALUES
(26, 1, NULL, 'Red', '2021-01-30 16:35:43', '2021-01-30 16:35:43'),
(27, 2, NULL, 'I am very kind and pretty.', '2021-01-30 16:35:43', '2021-01-30 16:35:43'),
(28, 3, 1, NULL, '2021-01-30 16:35:43', '2021-01-30 16:35:43'),
(29, 3, 3, NULL, '2021-01-30 16:35:43', '2021-01-30 16:35:43'),
(30, 3, 5, NULL, '2021-01-30 16:35:43', '2021-01-30 16:35:43'),
(31, 3, 7, NULL, '2021-01-30 16:35:43', '2021-01-30 16:35:43'),
(32, 4, 11, NULL, '2021-01-30 16:35:43', '2021-01-30 16:35:43');

-- --------------------------------------------------------

--
-- Table structure for table `voting_question`
--

DROP TABLE IF EXISTS `voting_question`;
CREATE TABLE IF NOT EXISTS `voting_question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `voting_id` int(11) NOT NULL,
  `voting_question_type_id` int(11) NOT NULL,
  `question` text NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `voting_question_voting_fk` (`voting_id`),
  KEY `voting_question_voting_question_type_fk` (`voting_question_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `voting_question`
--

INSERT INTO `voting_question` (`id`, `voting_id`, `voting_question_type_id`, `question`, `updated`, `created`) VALUES
(1, 2, 3, 'What is your favourite color?', '2021-01-24 13:39:59', '2021-01-21 00:00:00'),
(2, 2, 3, 'Please, describe yourself', '2021-01-24 13:40:18', '2021-01-21 00:00:00'),
(3, 2, 2, 'Choose domestic animals', '2021-01-24 14:49:17', '2021-01-24 13:43:06'),
(4, 2, 1, 'Choose favourite day in week', '2021-01-24 15:17:37', '2021-01-24 15:17:37'),
(5, 3, 1, 'Please, choose.', '2021-01-25 10:01:33', '2021-01-25 10:01:33'),
(6, 3, 3, 'Test', '2021-01-25 10:01:55', '2021-01-25 10:01:55'),
(7, 7, 1, 'What is your favourite color?', '2021-01-29 11:17:38', '2021-01-29 11:17:38'),
(8, 9, 1, 'uihuoihuij ujnin jinui', '2021-01-29 11:23:08', '2021-01-29 11:22:48');

-- --------------------------------------------------------

--
-- Table structure for table `voting_question_option`
--

DROP TABLE IF EXISTS `voting_question_option`;
CREATE TABLE IF NOT EXISTS `voting_question_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `voting_question_id` int(11) NOT NULL,
  `voting_question_option` varchar(200) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `voting_question_option_voting_question_fk` (`voting_question_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `voting_question_option`
--

INSERT INTO `voting_question_option` (`id`, `voting_question_id`, `voting_question_option`, `updated`, `created`) VALUES
(1, 3, 'Cat', '2021-01-24 14:51:41', '2021-01-24 14:51:41'),
(2, 3, 'Dog', '2021-01-24 14:51:41', '2021-01-24 14:51:41'),
(3, 3, 'Tigar', '2021-01-24 14:51:41', '2021-01-24 14:51:41'),
(4, 3, 'Lion', '2021-01-24 14:51:41', '2021-01-24 14:51:41'),
(5, 3, 'Cow', '2021-01-24 14:51:41', '2021-01-24 14:51:41'),
(6, 3, 'Puma', '2021-01-24 15:14:07', '2021-01-24 15:14:07'),
(7, 3, 'Zebra', '2021-01-24 15:15:40', '2021-01-24 15:15:40'),
(8, 4, 'Monday', '2021-01-24 15:19:09', '2021-01-24 15:19:09'),
(9, 4, 'Tuesday', '2021-01-24 15:19:41', '2021-01-24 15:19:41'),
(10, 4, 'Wednesday', '2021-01-24 15:20:54', '2021-01-24 15:20:54'),
(11, 4, 'Thursday', '2021-01-24 15:21:00', '2021-01-24 15:21:00'),
(12, 7, 'dog', '2021-01-29 11:17:53', '2021-01-29 11:17:53'),
(13, 7, 'ishnqn', '2021-01-29 11:17:59', '2021-01-29 11:17:59'),
(14, 7, 'd', '2021-01-29 11:19:25', '2021-01-29 11:19:25'),
(15, 8, 'Cat', '2021-01-29 11:23:21', '2021-01-29 11:23:21'),
(16, 8, 'dog', '2021-01-29 11:23:25', '2021-01-29 11:23:25'),
(17, 3, 'bbb', '2021-01-29 12:17:22', '2021-01-29 12:17:22'),
(18, 5, 'c', '2021-01-30 17:09:31', '2021-01-30 17:09:31'),
(19, 5, 'v', '2021-01-30 17:09:33', '2021-01-30 17:09:33');

-- --------------------------------------------------------

--
-- Table structure for table `voting_question_type`
--

DROP TABLE IF EXISTS `voting_question_type`;
CREATE TABLE IF NOT EXISTS `voting_question_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `voting_question_type`
--

INSERT INTO `voting_question_type` (`id`, `name`, `description`, `updated`, `created`) VALUES
(1, 'One choice', NULL, '2021-01-21 00:00:00', '2021-01-21 00:00:00'),
(2, 'Multiple choice', NULL, '2021-01-21 00:00:00', '2021-01-21 00:00:00'),
(3, 'Short answer', NULL, '2021-01-21 00:00:00', '2021-01-21 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `voting_type`
--

DROP TABLE IF EXISTS `voting_type`;
CREATE TABLE IF NOT EXISTS `voting_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `voting_type`
--

INSERT INTO `voting_type` (`id`, `name`, `description`, `updated`, `created`) VALUES
(1, 'All NDs', NULL, '2021-01-28 00:00:00', '2021-01-28 00:00:00'),
(2, 'NDs from particular region', NULL, '2021-01-28 00:00:00', '2021-01-28 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `voting_user`
--

DROP TABLE IF EXISTS `voting_user`;
CREATE TABLE IF NOT EXISTS `voting_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `voting_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `updated` datetime NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `voting_user_voting_fk` (`voting_id`),
  KEY `voting_user_user_fk` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `voting_user`
--

INSERT INTO `voting_user` (`id`, `voting_id`, `user_id`, `updated`, `created`) VALUES
(2, 2, 66, '2021-01-30 16:35:43', '2021-01-30 16:35:43');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `FK_ARTICLE_CATEGORY` FOREIGN KEY (`article_category_id`) REFERENCES `article_category` (`id`);

--
-- Constraints for table `country`
--
ALTER TABLE `country`
  ADD CONSTRAINT `FK_COUNTRY_CATEGORY` FOREIGN KEY (`country_category_id`) REFERENCES `country_category` (`id`),
  ADD CONSTRAINT `FK_COUNTRY_CSTATUS` FOREIGN KEY (`country_status_id`) REFERENCES `country_status` (`id`),
  ADD CONSTRAINT `FK_COUNTRY_REGION` FOREIGN KEY (`region_id`) REFERENCES `region` (`id`);

--
-- Constraints for table `faq`
--
ALTER TABLE `faq`
  ADD CONSTRAINT `FK_FAQ_CATEGORY` FOREIGN KEY (`faq_category_id`) REFERENCES `faq_category` (`id`);

--
-- Constraints for table `internship`
--
ALTER TABLE `internship`
  ADD CONSTRAINT `FK_INTERN_COUNTRY` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`),
  ADD CONSTRAINT `FK_OP_TAKER_INTERN` FOREIGN KEY (`op_taker_id`) REFERENCES `op_taker` (`id`);

--
-- Constraints for table `op_taker`
--
ALTER TABLE `op_taker`
  ADD CONSTRAINT `FK_OPTAKER_USER` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `op_taker_contact`
--
ALTER TABLE `op_taker_contact`
  ADD CONSTRAINT `FK_CONTACT_COUNTRY` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`),
  ADD CONSTRAINT `FK_OPTAKER_CONTACT` FOREIGN KEY (`op_taker_id`) REFERENCES `op_taker` (`id`);

--
-- Constraints for table `page_article_category`
--
ALTER TABLE `page_article_category`
  ADD CONSTRAINT `page_article_category_article_category_fk` FOREIGN KEY (`article_category_id`) REFERENCES `article_category` (`id`),
  ADD CONSTRAINT `page_article_category_page_fk` FOREIGN KEY (`page_id`) REFERENCES `page` (`id`);

--
-- Constraints for table `partner`
--
ALTER TABLE `partner`
  ADD CONSTRAINT `FK_PARTNER_COUNTRY` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`);

--
-- Constraints for table `sponsor`
--
ALTER TABLE `sponsor`
  ADD CONSTRAINT `FK_SPONSOR_COUNTRY` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `FK_STUDENT_USER` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_REGION` FOREIGN KEY (`region_id`) REFERENCES `region` (`id`),
  ADD CONSTRAINT `FK_USER_COUNTRY` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`),
  ADD CONSTRAINT `FK_USER_TYPE` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`id`);

--
-- Constraints for table `voting`
--
ALTER TABLE `voting`
  ADD CONSTRAINT `voting_voting_type_fk` FOREIGN KEY (`voting_type_id`) REFERENCES `voting_type` (`id`);

--
-- Constraints for table `voting_answer`
--
ALTER TABLE `voting_answer`
  ADD CONSTRAINT `voting_answer_voting_question_fk` FOREIGN KEY (`voting_question_id`) REFERENCES `voting_question` (`id`),
  ADD CONSTRAINT `voting_answer_voting_question_option_fk` FOREIGN KEY (`voting_question_option_id`) REFERENCES `voting_question_option` (`id`);

--
-- Constraints for table `voting_question`
--
ALTER TABLE `voting_question`
  ADD CONSTRAINT `voting_question_voting_fk` FOREIGN KEY (`voting_id`) REFERENCES `voting` (`id`),
  ADD CONSTRAINT `voting_question_voting_question_type_fk` FOREIGN KEY (`voting_question_type_id`) REFERENCES `voting_question_type` (`id`);

--
-- Constraints for table `voting_question_option`
--
ALTER TABLE `voting_question_option`
  ADD CONSTRAINT `voting_question_option_voting_question_fk` FOREIGN KEY (`voting_question_id`) REFERENCES `voting_question` (`id`);

--
-- Constraints for table `voting_user`
--
ALTER TABLE `voting_user`
  ADD CONSTRAINT `voting_user_user_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `voting_user_voting_fk` FOREIGN KEY (`voting_id`) REFERENCES `voting` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
