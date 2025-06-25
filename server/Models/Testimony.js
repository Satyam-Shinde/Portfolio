// Models/Testimony.js
const mongoose = require('mongoose');

const testimonySchema = new mongoose.Schema({
    name: String,
    desc: String,
    opinion: String,
    image: String
});

module.exports = mongoose.model('Testimony', testimonySchema);
