const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    _id: String,
    author:String,
    date:String,
    time:String,
    msg:String,
    media:Array
});

module.exports= mongoose.model('posts',PostSchema)


