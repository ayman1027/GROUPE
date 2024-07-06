const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur le back-end de Twitch');
});

app.listen(port, () => {
  console.log(`Back-end app listening at http://localhost:${port}`);
});
