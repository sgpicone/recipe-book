const db = require('../models')
let service = {};

service.getRecipeList = function (tags, limit) {
    return db.Recipe.findAll();
}

service.getRecipeByTag = function(tag) {
    let filter = {};
    filter.where = { }
    return db.Recipe.findOne(filter);
}

module.exports = service;