// routes/project-routes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Project = require('../models/project');


// GET route => to get all the projects
router.get('/projects', (req, res, next) => {
  Project.find()
    .then(allTheProjects => {

      res.json(allTheProjects);
    })
});

// POST route => to create a new project
router.post('/projects', (req, res, next) => {

  Project.create({
    name: req.body.name,
    description: req.body.description,
    reviews: req.body.reviews,
    Tasks: []
  })
    .then(response => {
      // we used to do res.render('project', { project: model })
      res.json(response); // key thing -- this is the only new part.
    })
});


// GET route => to get a specific project/detailed view
// <Route path="/:someParam">
router.get('/projects/:id', (req, res, next) => {

  Project.findById(req.params.id)
    .then(response => {
      res.json(response);
    })
})

// PUT route => to update a specific project
router.put('/projects/:id', (req, res, next) => {
  console.log("req.body", req.body)
  Project.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      console.log("hisssssssssssssssss.................................", result)
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

const stripe = require('stripe')('sk_test_51IJTHJFDXsNZkRh1BHAgAneXmIEs4y8qVSbGITxZrX9QUBOIbnGEf26aQtVnBdxaohhcJ2OY0QKltDCIxugs7EXp00yVTLA3GC');

const YOUR_DOMAIN = 'http://localhost:3000/kart'; // have to change before DEPLOY !
router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Some room in Moscow',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  res.json({ id: session.id });
});



module.exports = router;