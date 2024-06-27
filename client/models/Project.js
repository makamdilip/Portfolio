// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
});

module.exports = mongoose.model('Project', ProjectSchema);
