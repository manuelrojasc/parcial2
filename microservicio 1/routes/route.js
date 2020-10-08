const express = require('express');
const foodModel = require('../db/db');
const app = express();

app.get('/cursos', async (req, res) => {
  const cursos = await cursos.find({});

  try {
    res.send(cursos);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app