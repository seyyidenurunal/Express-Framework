const express = require('express');
const app = express();

app.set('view engine', 'pug')

var path = require ('path');
app.use(express.static(path.join(__dirname + '../public')));

app.get('/', (req,res) => {
  console.log('test')
  res.render("index.pug");
});

app.listen(3000, () => {
    console.log("Express server çalıştı.")
});
