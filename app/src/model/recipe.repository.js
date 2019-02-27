'use strict';

const { connect, close } = require('./connect');

function getRecipes(callback) {
    let db = connect();

    let query = `SELECT rowid, recipe AS recipe FROM Recipe`;

    db.all(query, (err, rows) => {
        if(err) {
            console.error(err.message);
        }
        callback(rows);
    });

    close(db);
}

function getRecipeByName(name, callback) {
    let db = connect();

    let query = `SELECT recipe.rowid, recipe.recipe 
                FROM Recipe, json_tree(Recipe.recipe)
                WHERE json_tree.key = 'name' AND json_tree.value = ?`;
    
    db.get(query, [name], (err, row) => {
        if (err) {
            console.error(err.message);
        }
        callback(row);
    });
    
    close(db);
    
}

module.exports = { getRecipes, getRecipeByName };