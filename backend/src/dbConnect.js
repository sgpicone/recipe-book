const mongoose = require('mongoose');
const host = 'localhost';

 const connect = () => {
     mongoose.connect(`mongodb://${host}/recipes`);
     
     const connection = mongoose.connection;

     connection.once('open', () => {
         console.log('MongoDB connection extablished');
     });
 }

 module.exports = connect;