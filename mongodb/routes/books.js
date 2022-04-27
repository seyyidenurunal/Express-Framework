var express = require('express');
var router = express.Router();

 // Models
var Book = require('../models/Book');


router.post('/new', function(req, res, next) {
    var book = new Book({
        title : 'İnsan Ne İle Yaşar',
        category : "Klasik",
        published : true,
        comments :[
            {message : "Harika bir kitap."},
            {message : "Tam bir başyapıt."}
        ],
        meta : {
            votes : 12,
            favs : 170
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
    Book.remove({published : true}, (err,data) => { //   belirtilen isimdeki tüm kayıtları siler
        res.json(data);
    });
});

router.put('/updateMany' ,(req, res) => {  //UpdateOne ise bulduğu ilk kaydı değiştirir.
    Book.updateMany({published : false}, {published : true}, (err,data) => { //False olan tüm kayıtları true yapar.
        res.json(data);
    });
});

router.get('/sort', (req,res) => {
    Book.find({}, (err,data) => {
        res.json(data);
    }).sort({'title': 1 }) //Rakamlar için 1 verilirse büyükten küçüğe -1 verilirse küçükten büyüğe sıralar
});                         //Harfler için 1 verilirse A'dan Z'ye, -1 için ise Z'den A'ya sıralar.


router.get('/limit', (req,res) => {
    Book.find({}, (err,data) => {
        res.json(data);
    }).limit(1); //Geri dönmesini istediğim maksimum datayı ifade eder.
});           

router.get('/skip', (req,res) => {
    Book.find({}, (err,data) => {
        res.json(data);
    }).skip(2); //Atlama yapmasını istediğimiz dataları ifade eder.
                //limit ile skip birlikte de kullanılabilir.
});  

//Aggregate -- Kümeleme işlemleri --Eşleştirme
router.get('/aggregate', (res,req) => {
    Book.aggregate([
        {
            $match :{ 
                published : true
            } 
        },
        {
            $project : {
                title : 1 //sadece istenilen alan gelir. true veya 1 ile getirilir.
            }
        },
        {
            $sort : {title : -1 } //başlığa göre alfabetik olarak terstem sıralar.
        },
        {
            $limit : 4
        },
        {
            $skip : 1
        }
    
    ], (err,data) => {    
            req.json(data);
    });
});



module.exports = router;
