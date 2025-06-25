// Models/Projects.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    desc: String,
    demo: String,
    source: String,
    image: String
});

module.exports = mongoose.model('Project', projectSchema);
