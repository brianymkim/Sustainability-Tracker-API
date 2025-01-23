// index.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

// GET endpoint to fetch all actions
app.get('/api/actions', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error reading data' });
    }
    res.json(JSON.parse(data));
  });
});

// POST endpoint to add a new action
app.post('/api/actions', (req, res) => {
  const newAction = req.body;
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error reading data' });
    }
    const actions = JSON.parse(data);
    actions.push(newAction);
    fs.writeFile('data.json', JSON.stringify(actions, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error writing data' });
      }
      res.status(201).json(newAction);
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
