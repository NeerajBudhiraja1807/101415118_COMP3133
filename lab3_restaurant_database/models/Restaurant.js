const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    id: Number,
    name: String,
    restaurant_id: String,
    cuisines: String,
    city: String
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
