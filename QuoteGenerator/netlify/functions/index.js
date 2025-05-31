// netlify/functions/index.js
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // Still using import

const app = express();
app.use(cors());

app.get('/get-quote', async (req, res) => { // This is your API endpoint
    const zenQuotesApiUrl = 'https://zenquotes.io/api/random';

    try {
        const response = await fetch(zenQuotesApiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching quote from ZenQuotes:', error);
        res.status(500).json({ error: 'Failed to fetch quote from external API.' });
    }
});

// Netlify Functions automatically handle the server listening part.
// We just need to export the Express app.
export default app; // Export the app for Netlify