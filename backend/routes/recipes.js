var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET recipes list page. */
router.get('/', function(req, res, next) {
  const tags = req.query.tags;
  const limit = req.query.limit;
  return db.Recipe.findAll()
    .then((recipes) => res.send(recipes))
    .catch((err) => {
      console.error('There was an error querying recipes', JSON.stringify(err));
      return res.send(err);
    });
});


router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  return db.Recipe.findById(id)
    .then((recipe) => res.send(recipe))
    .catch((err) => {
      console.error(`There was an error finding recipe with id ${id}`, JSON.stringify(err));
      return res.send(err);
    });
});

router.post('/', (req, res) => {
  const recipe = req.body;
  const createdAt = new Date().toDateString();
  const updatedAt = new Date().toDateString();
  return db.Recipe.create({recipe, createdAt, updatedAt})
    .then((recipe) => res.send(recipe))
    .catch((err) => {
      console.error('Error creating recipe', JSON.stringify(recipe));
      return res.status(400).send(err);
    });
});

router.delete('/:id', (red, res) => {
  const id = parseInt(req.params.id);
  return db.Recipe.findById(id)
    .then((recipe) => recipe.destroy())
    .then(() => res.send( { id }))
    .catch((err) => {
      console.error(`Error deleting recipe with ID ${id}`);
      res.status(400).send(err);
    });
});

module.exports = router;
