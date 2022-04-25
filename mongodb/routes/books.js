var express = require('express');
var router = express.Router();

 // Models
var Book = require('../models/Book');


router.post('/new', function(req, res, next) {
    var book = new Book({
        title : 'Yeni Dünyanın Cesur İnsanı',
        published : true,
        comments :[
            {message : "Harika bir kitap."},
            {message : "Tam bir başyapıt."}
        ],
        meta : {
            votes : 12,
            favs : 150
        }

    });

    book.save((err,data) => {
        if (err)
            console.log(err);

        res.json(data);
    });
});

router.get('/search', (req,res) => { //Sorgu yapmayı sağlar.
    Book.find({published : true, title : "Yeni"}, 'title comments' , (err,data) => { //2. parametre olarak girdiğimiz comment, bulunan verinin yalnızca comment kısmını getirmeyi sağlar. 
        res.json(data);                                                              //Birden fazla arama yapmak için virgülle devam ederiz.
    });                                                                              //Boş süslü paarantez gönderdiğimizde ise tüm kayıtları getirir.
});

module.exports = router;

