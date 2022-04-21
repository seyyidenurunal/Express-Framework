const express = require('express');
const app = express();

app.set('view engine', 'pug')

var path = require ('path');
app.use(express.static(path.join(__dirname + '../public')));

app.get('/', (req,res) => {
  res.render("index.pug", {name : "Ayşe", job  : "Developer"});
});

app.listen(3000, () => {
    console.log("Express server çalıştı.")
});
