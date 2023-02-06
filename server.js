const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);