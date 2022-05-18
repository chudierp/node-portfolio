const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hey Chudier');
})

app.listen(3000, () => {
    console.log('this server is running on port 3000')
})