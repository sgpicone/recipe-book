'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('recipe', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    serving_size: DataTypes.NUMBER,
    serving_size_unit: DataTypes.STRING,
    number_of_servings: DataTypes.NUMBER,
    source: DataTypes.STRING,
    time: DataTypes.NUMBER,
    time_unit: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    // Recipes.hasMany(models.MethodStep);
  };
  return Recipe;
};