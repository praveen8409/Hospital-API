const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://8479946428ll:XtvEdillGc6kBI0f@cluster0.oi62ndq.mongodb.net/Cluster0?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
