const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/categorey_api');

var categorey_schema = new mongoose.Schema({

    categorey_name:{
        type:String
    },
    categorey_title:{
        type:String
    },
    categorey_date:{
        type:String,
        default:Date
    },
    image:{
        type:String
    }

});

var categorey = mongoose.model('categorey',categorey_schema);

module.exports = categorey;