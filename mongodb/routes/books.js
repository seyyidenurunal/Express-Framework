var express = require('express');
var router = express.Router();

 // Models
var Book = require('../models/Book');


router.get('/new', function(req, res, next) {
    var book = new Book({
        title : 'Yeni Dünyanın Cesur İnsanı'
    });

    book.save((err,data) => {
        if (err)
            console.log(err);

        res.json(data);
    });
});

module.exports = router;
