// consultationRoutes.js
const express = require('express');
const router = express.Router();

// Exemple de route pour obtenir toutes les consultations
router.get('/', (req, res) => {
    // Logic pour récupérer les consultations
    res.json({ consultations: [] });
});

// Exemple de route pour ajouter une consultation
router.post('/', (req, res) => {
    // Logic pour ajouter une nouvelle consultation
    res.json({ message: 'Consultation ajoutée' });
});

module.exports = router;
