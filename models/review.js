var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports  = mongoose.model('Review', {
    title: String,
    description: String,
    rating: Number
});