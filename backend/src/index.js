const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const dbConnect = require('./dbConnect');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./api'));

dbConnect();

app.listen(port, () => console.log(`Listening on port ${port}`));
