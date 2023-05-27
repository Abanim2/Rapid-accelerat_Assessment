const express = require('express');
const trains = require('./data/trains');

const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/trains', (req, res) => {
  const { source, destination } = req.query;

  const matchingTrains = trains.filter(
    (train) =>
      train.source.toLowerCase() === source.toLowerCase() &&
      train.destination.toLowerCase() === destination.toLowerCase()
  );

  res.json(matchingTrains);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
