'use strict';
const rawJsonHummus = require('../../docs/hummus_recipe.json');
const rawJsonCookie = require('../../docs/cookie_recipe.json');

const hummus = JSON.stringify(rawJsonHummus);
const cookie = JSON.stringify(rawJsonCookie);

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Recipes', [
      {
        recipe: hummus,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        recipe: cookie,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Recipes', null, {});
  }
};
