const mongoose = require('mongoose');

const cleaningSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        required:false
    }
},{collection:'cleaning'});

const Cleaning = mongoose.model('Cleaning',cleaningSchema);

module.exports = Cleaning;