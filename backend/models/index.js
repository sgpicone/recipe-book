'use strict';
const Sequelize = require('sequelize');
const RecipeModel = require('./recipe');
const MethodStepModel = require('./methodstep');
const IngredientModel = require('./ingredient');
const TagModel = require('./tag');
const LinkModel = require('./link');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const Recipe = RecipeModel(sequelize, Sequelize);
const MethodStep = MethodStepModel(sequelize, Sequelize);
const Ingredient = IngredientModel(sequelize, Sequelize);
const Tag = TagModel(sequelize, Sequelize);
const Link = LinkModel(sequelize, Sequelize);

const RecipeIngredient = sequelize.define('recipe_ingredient', {
    qty: Sequelize.NUMBER,
    unit: Sequelize.STRING
});
const RecipeTag = sequelize.define('recipe_tag', {});

Recipe.hasMany(MethodStep);
Recipe.belongsToMany(Ingredient, { through: RecipeIngredient, unique: false });
Ingredient.belongsToMany(Recipe, { through: RecipeIngredient, unique: false });
Recipe.hasMany(Link);
Recipe.belongsToMany(Tag, { through: RecipeTag, unique: false});
Tag.belongsToMany(Recipe, { through: RecipeTag, unique: false});

sequelize.sync({force: true})
.then(() => {
    console.log(`Database & tables created`);
});

module.exports = {
    Recipe, MethodStep, Ingredient, Tag, Link
};