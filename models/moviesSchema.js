const mongoose = require('mongoose')

const movieschema = new mongoose.Schema({
    title: String,
    movieType : String,
    img : String,
    discription: String,
    relisDate : String,
})

const moviesModel = mongoose.model('moviesData', movieschema)

module.exports = moviesModel