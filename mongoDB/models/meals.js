const mongoose = require('mongoose');
const mealSchema = new mongoose.Schema({
    author: String,
    text: String,
    color: { type: String, default: 'black' },
    image: Buffer,
});

module.exports = mongoose.model('Meal', mealSchema);