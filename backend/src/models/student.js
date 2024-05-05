
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rollno: {
        type: Number,
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
    }
});

const Stundent = mongoose.model('Student', userSchema);

module.exports = Stundent;