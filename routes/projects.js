// routes/project-routes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Project = require('../models/project');
const Task = require('../models/task');


// GET route => to get all the projects
router.get('/projects', (req, res, next) => {
  Project.find().populate('tasks')
    .then(allTheProjects => {

      res.json(allTheProjects);
    })
});

// POST route => to create a new project
router.post('/projects', (req, res, next) => {

  Project.create({
    title: req.body.title,
    description: req.body.description,
    tasks: []
  })
    .then(response => {
      // we used to do res.render('project', { project: model })
      res.json(response); // key thing -- this is the only new part.
    })
});


// GET route => to get a specific project/detailed view
// <Route path="/:someParam">
router.get('/projects/:id', (req, res, next) => {

  Project.findById(req.params.id).populate('tasks')
    .then(response => {
      res.json(response);
    })
})

// PUT route => to update a specific project
router.put('/projects/:id', (req, res, next) => {

  Project.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is updated bla.` });
    })
})

// DELETE route => to delete a specific project
router.delete('/projects/:id', (req, res, next) => {

  Project.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is removed successfully.` });
    })
})



module.exports = router;