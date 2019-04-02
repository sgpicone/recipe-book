'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    recipe: DataTypes.JSON
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};