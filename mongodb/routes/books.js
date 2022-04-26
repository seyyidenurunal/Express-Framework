var express = require('express');
var router = express.Router();

 // Models
var Book = require('../models/Book');


router.post('/new', function(req, res, next) {
    var book = new Book({
        title : 'İnsan ne ile yaşar',
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
    });
});

router.get('/searchComplate', (req, res) => {
    Book.findOne({}, (err,data) => { //Tüm kayıtları getirir.
            res.json(data);
    });
});

router.get('/searchOne', (req, res) => {
    Book.findOne({published : true}, (err,data) => { //İlk kayıtla uyuştuğu an cevap döner.
            res.json(data);
    });
});

router.get('/searchById' ,(req, res) => {
    Book.findById('62668c3c5a35dd70d3796a35', (err,data) => { //Id bazlı arama yapmayı sağlar
    });
});

router.delete('/delete' ,(req, res) => { 
    Book.findOneAndRemove({title : "NodeJS Eğitim"}, (err,data) => { //Sadece bulduğu ilk kaydı siler.
        res.json(data);
    });
});

router.delete('/remove' ,(req, res) => { 
    Book.remove({title : "NodeJS Eğitim"}, (err,data) => { //   b   elirtilen isimdeki tüm kayıtları siler
        res.json(data);
    });
});

router.put('/updateMany' ,(req, res) => {  //UpdateOne ise bulduğu ilk kaydı değiştirir.
    Book.updateMany({published : false}, {published : true}, (err,data) => { //False olan tüm kayıtları true yapar.
        res.json(data);
    });
});

module.exports = router;
