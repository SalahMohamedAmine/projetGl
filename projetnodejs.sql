-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2019 at 08:27 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projetnodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id_department` int(11) NOT NULL,
  `intitule_department` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id_department`, `intitule_department`) VALUES
(1, 'Marketing'),
(2, 'Legal'),
(3, 'Marketing'),
(4, 'Support'),
(5, 'Business Development'),
(6, 'Sales'),
(7, 'Marketing'),
(8, 'Training'),
(9, 'Product Management'),
(10, 'Business Development'),
(11, 'Engineering'),
(12, 'Accounting'),
(13, 'Marketing'),
(14, 'Marketing'),
(15, 'Sales'),
(16, 'Legal'),
(17, 'Accounting'),
(18, 'Product Management'),
(19, 'Support'),
(20, 'Research and Development');

-- --------------------------------------------------------

--
-- Table structure for table `enseignant`
--

CREATE TABLE `enseignant` (
  `cin_enseignant` varchar(8) NOT NULL,
  `nom_enseignant` varchar(15) NOT NULL,
  `prenom_enseignant` varchar(25) NOT NULL,
  `adresse_enseignant` varchar(25) NOT NULL,
  `email_enseignant` varchar(25) NOT NULL,
  `telephone_enseignant` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `enseignant`
--

INSERT INTO `enseignant` (`cin_enseignant`, `nom_enseignant`, `prenom_enseignant`, `adresse_enseignant`, `email_enseignant`, `telephone_enseignant`) VALUES
('29949000', 'Georgi', 'Seedman', '3272 Glacier Hill Center', 'gseedman1@jalbum.net', '5309058240'),
('55971605', 'Wakefield', 'Newlyn', '6268 La Follette Plaza', 'wnewlyn3@printfriendly.co', '6505489537'),
('56763912', 'Tammy', 'Derks', '242 Fremont Place', 'tderks8@vkontakte.ru', '7842364814'),
('72651909', 'Teriann', 'Antonik', '89 Manufacturers Drive', 'tantonik9@twitter.com', '5358605467'),
('76372734', 'Rhodie', 'Gipp', '6515 Packers Alley', 'rgipp4@furl.net', '3296793001'),
('76767091', 'Isahella', 'Yearn', '0640 Dakota Parkway', 'iyearn5@nba.com', '2455324204'),
('77578783', 'Berty', 'Gavaran', '1037 Bayside Trail', 'bgavaran2@unesco.org', '1426348841'),
('78626122', 'Grete', 'Veazey', '0 Lyons Plaza', 'gveazey0@ted.com', '8052407183'),
('81524838', 'Marcie', 'Harman', '99371 Laurel Parkway', 'mharman6@microsoft.com', '4407976200'),
('89148892', 'Patin', 'Vedikhov', '4 Crest Line Place', 'pvedikhov7@jigsy.com', '3039096160');

-- --------------------------------------------------------

--
-- Table structure for table `etudiant`
--

CREATE TABLE `etudiant` (
  `cin_etudiant` varchar(8) NOT NULL,
  `nom_etudiant` varchar(25) DEFAULT NULL,
  `prenom_etudiant` varchar(25) DEFAULT NULL,
  `adresse_etudiant` varchar(255) DEFAULT NULL,
  `email_etudiant` varchar(25) DEFAULT NULL,
  `telephone_etudiant` varchar(16) DEFAULT NULL,
  `id_filiere` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `etudiant`
--

INSERT INTO `etudiant` (`cin_etudiant`, `nom_etudiant`, `prenom_etudiant`, `adresse_etudiant`, `email_etudiant`, `telephone_etudiant`, `id_filiere`) VALUES
('29386009', 'Kendricks', 'Tame', '04 Everett Alley', 'ktame2@google.com', '5825728785', 3),
('32795176', 'Charline', 'Crick', '8 Charing Cross Parkway', 'ccrickb@examiner.com', '4102073880', 12),
('42748188', 'Ted', 'Wardle', '3 Glendale Terrace', 'twardleh@chron.com', '5612574528', 18),
('46128149', 'Brendan', 'Earpe', '12444 Morning Pass', 'bearpej@networkadvertisin', '2187896602', 20),
('46628554', 'Therine', 'Chasemore', '4 Beilfuss Center', 'tchasemored@nasa.gov', '2573881240', 14),
('46689939', 'Constance', 'Morilla', '38 Sage Park', 'cmorillai@google.it', '3407419679', 19),
('47880078', 'Gabriellia', 'Clapison', '7 Riverside Trail', 'gclapisonc@squidoo.com', '1568239918', 13),
('54036086', 'Manya', 'Reinert', '164 Texas Drive', 'mreinerta@nsw.gov.au', '5756023759', 11),
('58266977', 'Codie', 'Petrie', '14 Talmadge Crossing', 'cpetrie5@livejournal.com', '9782581937', 6),
('68741664', 'Nikoletta', 'Hans', '5 Huxley Plaza', 'nhanse@dropbox.com', '3196836894', 15),
('75033637', 'Rachel', 'Keele', '13 Lakewood Point', 'rkeele9@independent.co.uk', '4058159144', 10),
('75931252', 'Dane', 'O\'Hone', '38 Prairieview Park', 'dohone7@redcross.org', '3641945680', 8),
('77883587', 'Lacey', 'Hartman', '6 Warbler Road', 'lhartman1@apple.com', '4615777176', 2),
('78826115', 'Gasper', 'Dake', '289 Everett Center', 'gdake3@cloudflare.com', '6796899889', 4),
('82670936', 'Noell', 'Brody', '4105 Northland Point', 'nbrody8@shareasale.com', '8285665672', 9),
('83595410', 'Dareen', 'Sproat', '27544 Fulton Avenue', 'dsproat0@dyndns.org', '1526922659', 2),
('86414352', 'Englebert', 'Rubra', '535 Old Shore Terrace', 'erubraf@mayoclinic.com', '4321485897', 16),
('88685315', 'Lillis', 'May', '4305 Northland Hill', 'lmay4@is.gd', '1587541905', 5),
('91500668', 'Ky', 'Bartalucci', '5119 Barnett Drive', 'kbartaluccig@walmart.com', '8978499478', 17),
('93600734', 'Briggs', 'Kenealy', '914 Hollow Ridge Way', 'bkenealy6@deliciousdays.c', '7723189166', 7);

-- --------------------------------------------------------

--
-- Table structure for table `filiere`
--

CREATE TABLE `filiere` (
  `id_filiere` int(11) NOT NULL,
  `intitule_filiere` varchar(25) NOT NULL,
  `id_department` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `filiere`
--

INSERT INTO `filiere` (`id_filiere`, `intitule_filiere`, `id_department`) VALUES
(2, 'Books', 2),
(3, 'Outdoors', 3),
(4, 'Info', 4),
(5, 'Garden', 5),
(6, 'Outdoors', 6),
(7, 'Jewelery', 7),
(8, 'Automotive', 8),
(9, 'Automotive', 9),
(10, 'Clothing', 10),
(11, 'Automotive', 11),
(12, 'Sports', 12),
(13, 'Grocery', 13),
(14, 'Music', 14),
(15, 'Tools', 15),
(16, 'Books', 16),
(17, 'Automotive', 17),
(18, 'Music', 18),
(19, 'Info', 19),
(20, 'Beauty', 20);

-- --------------------------------------------------------

--
-- Table structure for table `matiere`
--

CREATE TABLE `matiere` (
  `id_matiere` int(11) NOT NULL,
  `intitule_matiere` varchar(25) NOT NULL,
  `id_filiere` int(11) DEFAULT NULL,
  `id_enseignant` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `matiere`
--

INSERT INTO `matiere` (`id_matiere`, `intitule_matiere`, `id_filiere`, `id_enseignant`) VALUES
(3, 'base de donneé', 14, '56763912'),
(4, 'Energy', 3, '55971605'),
(6, 'Basic Industries', 10, '29949000'),
(7, 'DEVOPS', 3, '77578783'),
(10, 'BIG data', 17, '89148892'),
(11, 'Health Care', 8, '78626122');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id_department`);

--
-- Indexes for table `enseignant`
--
ALTER TABLE `enseignant`
  ADD PRIMARY KEY (`cin_enseignant`);

--
-- Indexes for table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`cin_etudiant`),
  ADD KEY `id_filiere` (`id_filiere`);

--
-- Indexes for table `filiere`
--
ALTER TABLE `filiere`
  ADD PRIMARY KEY (`id_filiere`),
  ADD KEY `id_dept` (`id_department`);

--
-- Indexes for table `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`id_matiere`),
  ADD KEY `id_filiere` (`id_filiere`),
  ADD KEY `id_enseignant` (`id_enseignant`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `filiere`
--
ALTER TABLE `filiere`
  MODIFY `id_filiere` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `etudiant_ibfk_1` FOREIGN KEY (`id_filiere`) REFERENCES `filiere` (`id_filiere`);

--
-- Constraints for table `filiere`
--
ALTER TABLE `filiere`
  ADD CONSTRAINT `filiere_ibfk_1` FOREIGN KEY (`id_department`) REFERENCES `department` (`id_department`);

--
-- Constraints for table `matiere`
--
ALTER TABLE `matiere`
  ADD CONSTRAINT `matiere_ibfk_1` FOREIGN KEY (`id_filiere`) REFERENCES `filiere` (`id_filiere`),
  ADD CONSTRAINT `matiere_ibfk_2` FOREIGN KEY (`id_enseignant`) REFERENCES `enseignant` (`cin_enseignant`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
