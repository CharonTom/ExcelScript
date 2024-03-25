# Suivi de Consommation d'Énergie

Ce backend est une application Node.js dotée d'un script permettant de récupérer et de calculer les consommations d'énergie à partir des données d'un fichier Excel. Ces données sont ensuite mises à disposition via une API REST pour un accès facile.

### Installation

- Assurez-vous que Node.js est installé sur votre système. Vous pouvez le télécharger à partir de [nodejs.org](https://nodejs.org/).
- Clonez ou téléchargez le repo
- Accédez au répertoire du projet et placez le fichier Excel à la racine du dossier.
- Ouvrez le terminal de commande à la racine du dossier et entrez "npm install" pour installer les dépendances.
- Entrez 'node server.js' pour lancer le server

Les consommations d'énergie seront immédiatement affichées dans la console.
Le serveur démarrera et écoutera les requêtes sur le port 5000 par défaut.
Vous pouvez accéder aux données de consommation d'énergie via l'URL suivante : http://localhost:5000/results mais je vous conseille toutefois de visualiser ces données sous forme de graphiques sur le frontend de cette application dans le dépôt suivant : https://github.com/CharonTom/ExcelScript-Front

### Technologies utilisées:

- Node.js
- Express
- Javascript
