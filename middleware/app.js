const express = require('express');
const app = express();


const profile = require('./profile');
const user = require('./user');

//helper
const isLogin = require('./helper/isLogin')
app.use(isLogin);

app.use('/', profile);
app.use('/', user);


app.listen(8000, () => {
    console.log("Express Server Çalıştı!");
});
