const mongoose =require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/restfulApıDB');
    mongoose.connection.on('open', () => {
        console.log("MongoDB : Connected")
    });
    mongoose.connection.on('error', (err) => {
        console.log("MongoDB : ERROR", err)
    });

};