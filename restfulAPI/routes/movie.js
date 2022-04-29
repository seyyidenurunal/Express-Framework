const express = require('express');
const app = require('../app');
const router = express.Router();

const Movie = require('../Models/Movie');

router.get('/', (req,res) => {
  const promise = Movie.find({});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/:movie_id', (req,res) => {  // id bazlı arama için
 
   const promise = Movie.findById(req.params.movie_id);

  promise.then((movie) => {
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

router.post('/', (req, res, next) => {
  //const{title,imdb,category,contry,year} = req.body;
  const movie = new Movie(req.body); //Postman'da body kısmının altında x-www-from-urlencoded i seçip girdiğimiz bilgiler db'e kaydedilir.

  // movie.save((err,data) => {
  //   if (err) 
  //     res.json(err);
    
  //   res.json(data.title);
  // });

const promise = movie.save();  //Yukarıdaki işlemin aynısını promise yapısını kullanarak bu şekilde daha temiz de yazabiliriz.

promise.then((data) => {
  res.json({status : 1});
}).catch((err) => {
  res.json(err);
});


});
    
module.exports = router;
