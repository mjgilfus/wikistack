const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')
const { db } = require("./models");

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.send('hello World');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
