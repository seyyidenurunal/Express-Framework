const express = require('express');
const router = express.Router();

const User = require('../Models/Users');

router.get('/', (req, res, next) => {
  res.render({ title: 'Express' });
});

router.post('/', (req, res, next) => {
  const {username, password} = req.body;

  const user = new User({ 
    username,
    password
  });

  const promise = user.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
