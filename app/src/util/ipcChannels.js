'use strict';

/**
 * Define a set of concrete IPC channels to communicate on, so that, ideally, both the backend 
 * and frontend will have a common set of constants to utilize.
 */

const IPC_CHANNELS = {
    "GET_RECIPE": 'get-recipe',
    "GET_RECIPE_LIST": 'get-recipes',
    "ADD_RECIPE": 'add-recipe',
    "EDIT_RECIPE": 'edit-recipe',
    "DELETE_RECIPE": 'del-recipe'
};

module.exports = Object.freeze(IPC_CHANNELS);