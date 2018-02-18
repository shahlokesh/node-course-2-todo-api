var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://LokeshMongoDb:Charusha619!@ds239648.mlab.com:39648/ls_mongodb_for_study')

module.exports = {mongoose};
