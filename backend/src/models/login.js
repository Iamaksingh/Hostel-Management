const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    rollno:{
        type:String,
        requried:true
    },
    logined:{
        type:Boolean,
        requried:true
    }
},{collection:'Login'});

const Login = mongoose.model('Login',loginSchema);

module.exports = Login;