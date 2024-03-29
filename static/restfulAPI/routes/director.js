const express = require('express');
const router = express.Router();

const Director = require('../Models/Director')
 
router.post('/', (req, res, next) => {
  const director = new Director(req.body);
  const promise = director.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });


});

module.exports = router;
