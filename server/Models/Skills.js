const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    category: String,
    name: String,
    image: String
});

module.exports = mongoose.model('Skill', skillSchema);
