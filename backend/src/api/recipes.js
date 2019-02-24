const sampleRecipe = require('../../test/sample_recipe.json');

const recipes = (req, res) => {
    res.json({
        sampleRecipe
    });
}

module.exports = recipes;