const express = require('express');
const router =express.Router();

router.get('/signIn', (req,res) => {
    res.send("Sign In sayfası ")
});


router.post('/signIn', (req,res) => {
    res.send("Sign In sayfası (POST) ")
});

module.exports = router;