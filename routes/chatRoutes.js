// chatRoutes.js
const express = require('express');
const router = express.Router();

// Exemple de route pour obtenir tous les messages
router.get('/messages', (req, res) => {
    // Logic pour récupérer les messages
    res.json({ messages: [] });
});

// Exemple de route pour envoyer un message
router.post('/send', (req, res) => {
    // Logic pour envoyer un message
    res.json({ message: 'Message envoyé' });
});

module.exports = router;
