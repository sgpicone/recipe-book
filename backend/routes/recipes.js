'use strict';
var express = require('express');
var router = express.Router();
const db = require('../models');
const repoService = require('../repos/recipeRepo');

/* GET recipes list page. */
router.get('/', function (req, res, next) {
  return repoService.getRecipeList(req.query.tags, req.query.limit)
    .then((recipes) => res.send(recipes))
    .catch((err) => {
      console.error('There was an error querying recipes', JSON.stringify(err));
      return res.send(err);
    });;
});


router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  return db.Recipe.findOne({
    where: {
      id: id
    }
  }).then((recipe) => {
    res.send(recipe);
  })
    .catch((err) => {
      console.error(`There was an error finding recipe with id ${id}`, JSON.stringify(err));
      return res.send(err);
    });
});

router.post('/', (req, res) => {
  const recipe = req.body;
  const createdAt = new Date().toDateString();
  const updatedAt = new Date().toDateString();
  // const tags = recipe.tags.map(tag => db.Tag.findOrCreate({ where: { tag: tag }, defaults: { tag: tag } }))
    // .spread((tag, created) => tag);
  return db.Recipe.create({
    name: recipe.name,
    description: recipe.description,
    serving_size: recipe.servingSize.qty,
    serving_size_unit: recipe.servingSize.unit,
    number_of_servings: recipe.serves,
    time: recipe.time.time,
    time_unit: recipe.time.unit,
    source: recipe.src,
    createdAt: createdAt,
    updatedAt: updatedAt
  })
    .then((recipe) => res.status(201).send(recipe))
    .catch((err) => {
      console.error('Error creating recipe', JSON.stringify(recipe));
      return res.status(400).send(err);
    });
});

router.delete('/:id', (red, res) => {
  const id = parseInt(req.params.id);
  return db.Recipe.findById(id)
    .then((recipe) => recipe.destroy())
    .then(() => res.send({ id }))
    .catch((err) => {
      console.error(`Error deleting recipe with ID ${id}`);
      res.status(400).send(err);
    });
});

module.exports = router;
