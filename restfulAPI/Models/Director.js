const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
    name : String,
    surname : String,
    bio : String, 
    directorID : Number,
});

module.exports = mongoose.model('Director', DirectorSchema);
