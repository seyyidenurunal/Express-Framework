const express = require('express');
const app = express();


const signIn = require('./signIn');
app.use('/', signIn); //İstersek /'dan sonra istediğimiz ön eki kullanabiliriz bu da signIn altındaki bütün isteklerde geçerli olur.
//Bunun gibi bir çok dosya oluşturup ekleyebiliriz.


app.listen(7000, () => {
    console.log("Express Server Çalıştı!");
});
