const { Configuration, OpenAIApi } = require('openai');

// configuration pour les interactions avec l'IA
const configuration = new Configuration({
    apiKey: 'votre_cle_api_openai'
});
const openai = new OpenAIApi(configuration);

const getAIResponse = async (message) => {
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Patient: ${message}`,
            max_tokens: 150,
            n: 1,
            stop: null,
            temperature: 0.7,
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Erreur lors de la génération de la réponse de l\'IA:', error);
        return 'Désolé, je n\'ai pas pu répondre à votre message.';
    }
};

module.exports = { getAIResponse };
