'use strict';

const init = require('./initDb');
const recipeRepo = require('./recipe.repository');

init.initDb();

function getRecipes() {
    return recipeRepo.getRecipes((recipes) => {
        return recipes;
    });
}

function getRecipeByName(name) {
    return recipeRepo.getRecipeByName(name, (recipe) => {
        return recipe;
    });
}

// setTimeout(init.test, 3000);
// recipeRepo.getRecipes(console.log);
// setTimeout(()=> { return recipeRepo.getRecipeByName('Cookies', console.error)}, 4000);

module.exports = { getRecipeByName, getRecipes };