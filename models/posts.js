const mongoose = require('mongoose')


const placeSchema = new mongoose.Schema({
    Country: {
        type: String
    },
    Sight: {
        type: String
    },
    Description: {
        type: String
    },
    AvgStars: {
        type: String
    },
    address: {
        type: String
    },
    latitude:{
        type: Number
    },
    longitude: {
        type: Number
    },
    image: {
        type: String
    },
    likes: {
        type: Number
    },
    dislikes: {
        type: Number
    }
})


module.exports = mongoose.model('places', placeSchema)