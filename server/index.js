const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Contact = require('./Models/Contact');
const Project = require('./Models/Projects');
const Testimony = require('./Models/Testimony');
const Skill = require('./Models/Skills');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));


// API Route
app.post('/api/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(200).json({ success: true, message: 'Form submitted!' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Get all projects
app.get('/api/projects', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

// Get all Skills
app.get('/api/skills', async (req, res) => {
    const skills = await Skill.find();
    res.json(skills);
});

// Get all testimonials
app.get('/api/testimonies', async (req, res) => {
    const testimonies = await Testimony.find();
    res.json(testimonies);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌐 Server running on port ${PORT}`));
