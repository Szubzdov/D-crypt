const mongoose = require('mongoose');

const RelationSchema = new mongoose.Schema({
    _id: String,
    type:String,
    id_first:String,
    id_second:String
  
});

module.exports= mongoose.model('relations',RelationSchema)


