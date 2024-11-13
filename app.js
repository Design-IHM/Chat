const express = require('express');
const app = express();
app.use(express.json());

// Importer les routes
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const consultationRoutes = require('./routes/consultationRoutes');

// Monter les routes
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/consultations', consultationRoutes);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Une erreur s\'est produite sur le serveur' });
});

module.exports = app;
