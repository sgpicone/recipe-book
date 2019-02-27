'use strict';

//file to connect to or create the database

//import in verbose mode to produce long stack traces
const sqlite3 = require('sqlite3').verbose();

const DEFAULT_DB = require('./config.json').db;

/**
 * Opens a connection to a sqlite3 database, given a path to that file.
 * 
 * @param {string} filepath The path to the sqlite3 database to be opened. If undefined, 
 *      uses DEFAULT_DB value
 * @returns the sqlite3 db object
 */
function connect(filepath) {
    //if no path provided, use default.
    if(!filepath) filepath = DEFAULT_DB;

    return new sqlite3.Database(filepath, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(`Connected to the recipe database at ${filepath}`);
        }
    });
}

function close (db) {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Closed database connection');
    });
}

module.exports = { connect, close };



