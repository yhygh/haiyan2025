import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const FRONT_END_PORT = 5000;

// Serve static files from the dist directory
console.log(`__dirname = ${__dirname}`);
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Listen on a different port than the API server
app.listen(FRONT_END_PORT, () => {
    console.log("Frontend server is running on port 5000");
});

