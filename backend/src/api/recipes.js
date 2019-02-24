const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

const recipes = (req, res) => {
    Recipe.find((err, recipes) => {
        if(err) {
            console.error(err);
        } else {
            res.json(recipes);
        }
    }) ;
}

router.get('/', recipes);

module.exports = router