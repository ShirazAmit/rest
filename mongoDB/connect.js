const Meal = require('./models/meals');

async function main() {
    const mongoose = require('mongoose');
    await mongoose.connect('mongodb://localhost/test');

    await Meal.create({ author: 'ynon', text: 'Hello World' });
    await Meal.create({ author: 'ynon', text: 'Nice to meet you', color: 'red' });

    await mongoose.disconnect();
}

main()