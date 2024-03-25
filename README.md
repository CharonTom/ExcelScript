# Backend de l'Application de Suivi de Consommation d'Énergie

Ce backend est une application Node.js qui fournit une API REST pour récupérer les données de consommation d'énergie à partir d'un fichier Excel et les traiter.

### Installation

- Assurez-vous que Node.js est installé sur votre système. Vous pouvez le télécharger à partir de [nodejs.org](https://nodejs.org/).
- Cloner ou télécharger le repo
- Accédez au répertoire du projet et placez votre fichier Excel contenant les données de consommation d'énergie dans le répertoire du projet. Assurez-vous que le chemin du fichier est correctement défini dans le code.
- Ouvrir le terminal de commande à la racine du dossier et entrer "npm install" pour installer les dépendances.
- Entrer 'node server.js' pour lancer le server
- Le serveur démarrera et écoutera les requêtes sur le port 5000 par défaut. Vous pouvez accéder aux données de consommation d'énergie via l'URL suivante : http://localhost:5000/results

### Technologies utilisées:

- Node.js
- Express
- Javascript
