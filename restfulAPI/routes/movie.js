const express = require('express');
const app = require('../app');
const Director = require('../Models/Director');
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

//TOP 10 :

router.get('/top10', (req,res) => {
  const promise = Movie.find({}).limit(10).sort({imdb: -1});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


router.get('/:movie_id', (req,res,next) => {  // id bazlı arama için
 
   const promise = Movie.findById(req.params.movie_id);

  promise.then((movie) => {
   
    res.json(movie);
  }).catch((err) => {
    next({message : 'The movie was not found.'});
    
  });
});


router.put('/:movie_id', (req,res,next) => {   //veri güncelleme
 
  const promise = Movie.findByIdAndUpdate(req.params.movie_id, req.body, {new : true});

 promise.then((movie) => {
  
   res.json(movie);
 }).catch((err) => {
   next({message : 'The movie was not found.'});
   
 });
});

router.delete('/:movie_id', (req,res,next) => {  //veri silme
  const promise = Movie.findByIdAndRemove(req.params.movie_id);

 promise.then((movie) => {
  
   res.json(movie);
 }).catch((err) => {
   next({message : 'The movie was not found.'});
   
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
  res.json(data);
}).catch((err) => {
  res.json(err);
});
});
   
router.get('/between/:start_year/:end_year', (req,res) => { //tarihler arasındaki dataları döner
  const {start_year, end_year} = req.params;
  const promise = Movie.find(
    {
      year : { "$gte" : parseInt(start_year) , "$lte" : parseInt(end_year) }, //aynı veya önceki veya sonraki tarihler.
  }
);
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});



module.exports = router;
