const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../Models/Users');

router.post('/register', (req, res, next) => {
  const {username, password} = req.body;
 
  bcrypt.hash(password, 10) //Şifreyi, Db'e şifreleyerek gönderir.
  .then((hash) => {
      const user = new User({ 
        username,
        password : hash
    });
  
  
    const promise = user.save();
  
    promise.then((data) => {
      res.json(data);
    }).catch((err) => {
      res.json(err);
    })
  });

});

module.exports = router;
