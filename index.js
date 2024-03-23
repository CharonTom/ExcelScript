const XLSX = require("xlsx");

// Charger le fichier Excel
const workbook = XLSX.readFile("Exercice.xlsx");

// Extraire la feuille numéro 1
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convertir les données Excel en format JSON
const data = XLSX.utils.sheet_to_json(worksheet, {
  header: ["Date", "Heure", "Puissance"],
});

// Initialiser les variables pour stocker la puissance accumulée pour chaque groupe
let puissanceSemaine = 0;
let puissanceSamedi = 0;
let puissanceAutres = 0;

// Parcourir chaque objet dans le tableau de données
data.forEach((entry) => {
  // Extraire la date, l'heure et la puissance
  const heureDecimal = entry.Heure; // conversion d'une journée en décimal en heure décimal
  const heure = Math.floor(heureDecimal * 24); // Heure entière
  const minute = heureDecimal * 24 - heure; // Minute en décimal

  const heureAvecMinutesDecimal = heure + minute; //
  console.log(heureAvecMinutesDecimal);

  const puissance = entry.Puissance / 1000; // P en kw

  const excelDate = entry.Date;
  const date = new Date((excelDate - 25569) * 86400 * 1000);

  const heureEstDansPlage = heure >= 8 && heure < 20; // Déterminer si l'heure est comprise entre 8h et 20h
  const jourSemaine = date.getDay(); // 0 (dimanche) à 6 (samedi)
});
