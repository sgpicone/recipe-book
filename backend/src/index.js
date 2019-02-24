const makeApp = require('./makeApp');

const port = 3000;

makeApp()
    .then(app => app.listen(port))
    .then(() => {
        console.log(`Server started and listening on port ${port}`);
    })
    .catch(err => {
        console.error('Caught error', err);
    });