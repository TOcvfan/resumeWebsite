DROP TABLE IF EXISTS ITSmurfDB.`bruger`, ITSmurfDB.`bruger_profil`, ITSmurfDB.`brugersdyr`, ITSmurfDB.`dyr`, itsmurfDB.`links`, itsmurfDB.`gaestebog`;
CREATE TABLE ITSmurfDB.`bruger_profil`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `bruger_id` INT NOT NULL,
    `fornavn` VARCHAR(100) NOT NULL,
    `mellemnavn` VARCHAR(100) NULL,
    `efternavn` VARCHAR(100) NOT NULL,
    `oprettetDen` DATE NOT NULL,
    `forhold` VARCHAR(100) NOT NULL,
    `foedselsdag` DATE NOT NULL,
    `land` VARCHAR(100) NOT NULL,
    `sidstOnline` DATE NOT NULL,
    `sprog` VARCHAR(45) NOT NULL,
    `sex` VARCHAR(45) NOT NULL
);
CREATE TABLE ITSmurfDB.`dyr`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `navn` VARCHAR(100) NOT NULL
);
CREATE TABLE ITSmurfDB.`emner` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `navn` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
CREATE TABLE ITSmurfDB.`brugersdyr`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `bruger_id` INT NOT NULL,
    `dyr_id` INT NOT NULL
);
CREATE TABLE ITSmurfDB.`bruger`(
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `brugernavn` VARCHAR(255) NOT NULL UNIQUE,
    `userpassword` VARCHAR(100) NOT NULL,
    `role` VARCHAR(10) NOT NULL,
    `glemtpasswordtoken` VARCHAR(100) NULL DEFAULT NULL,
    `glemtpasswordudlob` DATETIME NULL DEFAULT NULL
);
CREATE TABLE ITSmurfDB.`link` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `navn` VARCHAR(45) NOT NULL,
  `emne` INT NOT NULL,
  `link` VARCHAR(255) NOT NULL,
  `beskrivelse` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));
CREATE TABLE ITSmurfDB.`gaestebog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `navn` VARCHAR(45) NOT NULL,
  `titel` VARCHAR(45) NOT NULL,
  `dato` DATETIME NOT NULL,
  `tekst` LONGTEXT NOT NULL,
  `vismig` TINYINT NOT NULL,
  `visden` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`));
/*DROP TABLE IF EXISTS ITSmurfDB.oktan95;
CREATE TABLE ITSmurfDB.oktan95 (
 `id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `pris` VARCHAR(150) NOT NULL,
  `dato` date);*/

ALTER TABLE ITSmurfDB.`bruger_profil` 
ADD COLUMN `billede` VARCHAR(255) NULL DEFAULT NULL AFTER `sex`,
ADD UNIQUE INDEX `billede_UNIQUE` (`billede` ASC) VISIBLE;
ALTER TABLE ITSmurfDB.`brugersdyr`
ADD FOREIGN KEY(`dyr_id`) REFERENCES `dyr`(`id`);
ALTER TABLE ITSmurfDB.`bruger_profil`
ADD FOREIGN KEY(`bruger_id`) REFERENCES `bruger`(`id`);
ALTER TABLE ITSmurfDB.`brugersdyr`
ADD FOREIGN KEY(`bruger_id`) REFERENCES `bruger_profil`(`bruger_id`);
INSERT INTO ITSmurfDB.`dyr`(navn)
VALUES("Kat"),
    ("Hund"),
    ("Fisk"),
    ("Fugl"),
    ("Edderkop"),
    ("Skildpadde"),
    ("Slange");
INSERT INTO ITSmurfDB.`emner`(navn)
VALUES("Uddannelse"),
    ("Opskrifter"),
    ("Server"),
    ("Client"),
    ("Spil"),
    ("2cv reservedele"),
    ("Raspberry Pi"),
    ("Andre nyttige links");
INSERT INTO ITSmurfDB.`link`(navn, emne, link, beskrivelse)
VALUES("Lectio", 1, "https://www.lectio.dk/", null),
    ("UMS", 1, "https://bas.mercantec.dk/loggedin/default.aspx", null),
    ("Intranet", 1, "https://intranet/", "Husk VPN"),
    ("knex.js", 3, "https://knexjs.org/", "Databasebehandling"),
    ("React Hook Form", 4, "https://react-hook-form.com/docs", "til formularer");