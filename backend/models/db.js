// const sqlite3 = require('sqlite3').verbose();


// const db = new sqlite3.Database('recipe.db');

// db.serialize(function () {
    //     db.run('CREATE TABLE recipe (recipe TEXT');
    //     var stmt = db.prepare('INSERT INTO recipe VALUES (?)');
    //     for(var i = 0; i< 10; i++) {
        //         stmt.run("lorem " + i);
        //     }
        //     stmt.finalize();
        
        //     db.each('SELECT rowid AS id, recipe FROM recipe', function (err, row) {
//         console.log(row.id + ': ' + row.recipe)
//       });
// });

// db.close();


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('recipe.db');
const sampleRecipe = require('../../docs/cookie_recipe.json');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS recipe (recipe JSON)");

  var stmt = db.prepare("INSERT INTO recipe VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run(JSON.stringify(sampleRecipe));
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, recipe FROM recipe", function(err, row) {
      console.log(row.id + ": " + row.recipe);
  });
});

db.close();