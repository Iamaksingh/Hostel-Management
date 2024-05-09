
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollno: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    allotedRoom: {
        type: String,
        required: false,
        unique: true
    },
    fees:{
        type:String,
        required:false
    }
},{collection:'students'});

const Stundent = mongoose.model('Student', studentSchema);

module.exports = Stundent;