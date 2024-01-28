const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    id: String,
    nick:String,
    email:String,
    password:String,
    prof:String,
    bio:String
});

module.exports= mongoose.model('accounts',AuthSchema)


