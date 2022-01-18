const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
  // console.log(request);
})

app.get('/about', (req, res) => {
  res.send('I am a superhero, who uses his powers for himself. So, actually I am just a superhuman.')
  // console.log(request);
})

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}')
})

// run a server using command: node server.js

