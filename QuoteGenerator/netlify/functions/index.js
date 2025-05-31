// netlify/functions/index.js (Temporary for debugging)
import express from 'express';
import cors from 'cors';
// import fetch from 'node-fetch'; // Temporarily comment out fetch

const app = express();
app.use(cors());

app.get('/get-quote', async (req, res) => {
    console.log('Function received request - TEST.');
    res.json([{ q: "Hello from Netlify Function!", a: "Debugger" }]);
});

export default app;