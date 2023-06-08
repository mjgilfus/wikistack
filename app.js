const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send('hello World');
});

const port = 1337;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
