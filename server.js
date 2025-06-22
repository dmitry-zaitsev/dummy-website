const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/maestro',
  express.static(
    path.join(__dirname, '..', 'maestro', 'maestro-client', 'src', 'main', 'resources')
  )
);

app.listen(port, () => {
  console.log(`Dummy website listening at http://localhost:${port}`);
});