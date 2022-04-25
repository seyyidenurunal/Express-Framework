var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    published: Boolean,
    comments : [{message : String}],
    meta : {
        votes : Number,
        favs : Number
    }
});

module.exports = mongoose.model('Book', BookSchema);




