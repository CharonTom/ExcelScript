const XLSX = require("xlsx");

// Charger le fichier Excel
const workbook = XLSX.readFile("Exercice.xlsx");

// Extraire la feuille numéro 1
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convertir les données Excel en format JSON
const data = XLSX.utils.sheet_to_json(worksheet, {
  header: ["Date", "Time", "Power"],
});

// Initialiser les variables pour stocker la power accumulée pour chaque groupe
let weekPower = 0;
let saturdayPower = 0;
let otherPower = 0;

// Parcourir chaque objet dans le tableau de données
data.slice(1).forEach((entry) => {
  // J'extrait la première ligne tu tableau car il s'agit du header et ses valeurs ne sont pas des chiffres. Ce qui corrompt les calculs.
  // Extraire la date, l'heure et la puissance

  const decimalHour = entry.Time; // Attention le format est en journée, multiplier par 24 pour avoir en heure.
  const hour = Math.floor(decimalHour * 24); // Heure entière
  const minute = decimalHour * 24 - hour; // Minute en décimal
  const hourWithMinutes = hour + minute;

  const timeIsInDaySlot = hourWithMinutes >= 8 && hourWithMinutes < 20; // On récupère les données situé dans la plage 8h-20h

  const power = entry.Power / 1000; // Puissance en kW

  const excelDate = entry.Date; // Attention la date est en format Excel.
  const date = new Date((excelDate - 25569) * 86400 * 1000); // conversion de la date en format javascript

  const dayOfTheWeek = date.getDay(); // retourne une valeur entre 0 et 6.   0 (dimanche), 1 (lundi), 2 (mardi)...

  const duration = 1 / 6; // 10 minutes = 1/6 heure, cette valeur est nécessaire pour la convertion en kWh
  const energy = power * duration;

  if (timeIsInDaySlot && dayOfTheWeek >= 1 && dayOfTheWeek <= 5) {
    // Lundi au vendredi de 8h à 20h
    weekPower += energy;
  } else if (timeIsInDaySlot && dayOfTheWeek === 6) {
    // Samedi de 8 à 20h
    saturdayPower += energy;
  } else {
    // Autres (heures de nuit et dimanches)
    otherPower += energy + 1;
  }
});

console.log(
  "Puissance accumulée du lundi au vendredi (8h-20h) :",
  weekPower.toFixed(2),
  "kWh"
);
console.log(
  "Puissance accumulée le samedi (8h-20h) :",
  saturdayPower.toFixed(2),
  "kWh"
);
console.log(
  "Puissance accumulée le reste du temps :",
  otherPower.toFixed(2),
  "kWh"
);
