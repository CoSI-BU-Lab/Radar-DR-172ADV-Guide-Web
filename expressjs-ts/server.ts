import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
const port = 3000;

// Serve static files from the 'image' directory
app.use('/image', (req, res, next) => {
  console.log(`Serving image: ${req.url}`);
  next();
}, express.static(path.join(__dirname, 'image')));

// Define a route for the root path
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API! Use /data to access the JSON data.');
});

// Define a route to get data from the JSON file
app.get('/data', (req: Request, res: Response) => {
  const filePath = path.join(__dirname, 'data.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data file:', err);
      return res.status(500).send('Error reading data file');
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData); // Ensure sending JSON response
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      res.status(500).send('Error parsing data');
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
