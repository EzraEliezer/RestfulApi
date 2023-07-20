const express = require('express'); // import express
const app = express(); // Initialize express

const port = 8080; // specifying port number

app.use(express.json()); //middleware

app.listen(port, () => console.log(`It's Alive on http://localhost:${port}`));

app.get('/tshirt', (req, res) => {    //get
  res.status(200).send({
    tshirt: '👕',
    size: 'large'
  });
});


app.post('/tshirt/:id', (req, res) => { //post
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: 'we need a logo!' });
  }
  res.send({
    tshirt: `👕 with your ${logo} and ID of ${id}`,
  });
});


