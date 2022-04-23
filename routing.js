const express = require('express');
const app = express();

/*
? => Zorunlu olmayan  (ilet?isim -- ileisim de yazılsa kabul.) ya da (ile(ti)sim -- ilesim yazarsa kabul)
                                                                    ama parantez içine alınanların hiçbiri olmaması lazım.
* => Yerine Herhangi bir ifade gelebilir. (ileti*sim -- iletiKSNVSJKNSsim de yazılsa çalışır.)
+ => Soldaki ifadenin aynısı olmalı.

*/

app.get('/ileti+sim', (req,res) => { // Yni eğer url'e iletiisim de yazılmış olsa hata vermeden çalışır.
    res.send("Hello Express");
    console.log("Test");
});

app.post('/iletisim', (req,res) => { //Postman ile istekleri kontrol edebiliriz.
    res.send("Post Method");            
})

app.all('/iletisim', (req,res) => { //Bu sayfa için gelecek bütün istekleri all karşılar.
    res.send("Burası All...")
})

app.listen(4000, () => {
    console.log("Express Server Çalıştı!");
});

