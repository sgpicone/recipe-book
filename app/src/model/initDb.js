const { connect, close } = require('./connect');

const recipe = require('../../../docs/sample_recipe.json');
const RECIPE_TABLE = 'recipe';

function initDb() {
    let db = connect();
    console.log("creating table maybe");
    db.run(`CREATE TABLE IF NOT EXISTS Recipe (recipe JSON)`, (err) => {
        if(err) {
            console.log(err.message);
        }
    });
    close(db);
}

function test() {
    let db = connect();

    // console.log(recipe);

    db.run(`INSERT INTO Recipe VALUES (?)`, [JSON.stringify(recipe)], function(err) {
        if(err) {
            console.error(err.message);
        }
        console.log(`A row was added with id: ${this.lastID}`);
    });
    
    db.serialize(() => {
        db.each(`SELECT rowid, recipe FROM recipe`, (err, row) => {
            if( err ) {
                console.error(err.message);
            }
            // console.log(row.key + '\n' + row.value);
            console.log(JSON.parse(row.recipe).src);
        })
    });

    close(db);
}

module.exports = { initDb, test }