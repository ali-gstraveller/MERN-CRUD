const mongoose = require('mongoose');

const mongoURI = "";

mongoose.connect(mongoURI);

module.exports = mongoose;
 