const Mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id : Schema.Types.ObjectId,
    title : {
        type : String,
        required : true,
    },
    category : String,
    contry : String,
    year : Number,
    imdb : Number,
    date : {
        type : Date,
        default : Date.now,
    }
});

module.exports = mongoose.model('Movie', MovieSchema);