const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'db',
  user: 'user',
  password: 'password',
  database: 'twitchdb'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

app.get('/api/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error fetching users: ' + error.stack);
      res.status(500).send('Error fetching users');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});

