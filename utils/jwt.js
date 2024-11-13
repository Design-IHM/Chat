const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    return jwt.sign({ userId }, 'secret_key', { expiresIn: '24h' });
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, 'secret_key');
        return decoded;
    } catch (err) {
        console.error('Erreur de vérification du jeton:', err);
        return null;
    }
};

module.exports = { generateToken, verifyToken };
