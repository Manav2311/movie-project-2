const mongoose = require('mongoose')

const reviewschema = new mongoose.Schema({
    movieid: String,
    feedback:String,
    rateing:String
})

const reviewModel = mongoose.model('reviewData', reviewschema)

module.exports = reviewModel
