const express = require('express');
const Director = require('../Models/Director');
const router = express.Router();
const app = require('../app');


router.get('/', (req,res) => {
  const promise = Director.find({});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


router.post('/', (req, res, next) => {
  const director =  new Director(req.body);
  const promise = director.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })
});

router.delete('/:director_id', (req,res,next) => {  //veri silme
  const promise = Director.findByIdAndRemove(req.params.director_id);

 promise.then((director) => {
   res.json(director);
 }).catch((err) => {
   next({message : 'The movie was not found.'});
   
 });
}); 

router.get('/:director_id', (req,res,next) => {  // id bazlı arama için
 
  const promise = Director.findById(req.params.director_id);

 promise.then((director) => {
  
   res.json(director);
 }).catch((err) => {
   next({message : 'The movie was not found.'});
   
 });
});

module.exports = router;
