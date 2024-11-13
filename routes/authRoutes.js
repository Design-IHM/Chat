// authRoutes.js
const express = require('express');
const router = express.Router();

// Exemple d'une route de connexion
router.post('/login', (req, res) => {
    // Logic pour la connexion
    res.json({ message: 'Utilisateur connecté' });
});

// Exemple d'une route d'inscription
router.post('/register', (req, res) => {
    // Logic pour l'inscription
    res.json({ message: 'Utilisateur inscrit' });
});

module.exports = router;
