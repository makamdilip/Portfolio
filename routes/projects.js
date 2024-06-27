// routes/projects.js
import { Router } from 'express';
import Project, { find } from '../models/Project';
const router = Router();

router.get('/', async (req, res) => {
  try {
    const projects = await find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
  });
  
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
