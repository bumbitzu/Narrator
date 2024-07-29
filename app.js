const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servește fișiere statice din directorul 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>
{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () =>
{
  console.log(`Serverul rulează la http://localhost:${port}`);
});
