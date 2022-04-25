var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String
});

module.exports = mongoose.model('Book', BookSchema);



