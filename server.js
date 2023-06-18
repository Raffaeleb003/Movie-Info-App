const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;
const apiKey = 'YOUR_API_KEY';

app.use(express.static('public'));

app.get('/api/movies', async (req, res) => {
  const { movieName } = req.query;
  const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});