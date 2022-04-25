var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type : String,
        required : true, // Bu alanın zorunlu olarak doldurulması gerektiğini ifade eder.
        unique : true, // Bu alanın eşsiz olduğu, yani aynı title da bir kitap daha eklenemeyeceği anlamına gelir.
    },
    comments : [{message : String}],
    meta : {
        votes : Number,
        favs : Number
    },
    published: {
        type : Boolean, //Normalde değeri bu şekilde süslü parantez gerekmeden hemen yanına yazabilriz.
        default : false, //Ancak eğer bu şekilde bir varsayılan değer atanacaksa, o zaman süslü parantez ile yazabliliriz. 
    },
    publishedAt :{ //Yayın tarihi
        type : Date,
        default : Date.now, //Tarih girilmediğinde varsayılan olarak bugünün tarihini alır.
    } 
});

module.exports = mongoose.model('Book', BookSchema);








