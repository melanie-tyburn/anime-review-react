require('dotenv').config(); // Charge les variables d'environnement depuis un fichier .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importation des routes
const authRoutes = require('./routes/authRoutes');
const animeRoutes = require('./routes/animeRoutes');

// Création de l'application Express
const app = express();

// Middleware
app.use(express.json()); // Permet de parser le corps des requêtes en JSON
app.use(cors()); // Autorise les requêtes cross-origin entre le frontend et le backend

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(err => console.log('Erreur de connexion MongoDB :', err));

// Routes API
app.use('/auth', authRoutes);   // Routes d'authentification (login, signup)
app.use('/animes', animeRoutes); // Routes pour gérer les animes

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend lancé sur http://localhost:${PORT}`);
});