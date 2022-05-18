const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
// Middleware

const publicDirectoryPath = path.join(__dirname, '../public')

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set('views', './views');

app.use(express.static(publicDirectoryPath))

app.get('/', function (req, res) {
  res.render('home', {
      title: 'Home',
      name: 'Chudier'
  });
})

app.listen(3000, () => {
    console.log('this server is running on port 3000')
})