
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNo: {
        type: String,
        required: true,
        unique: true
    },
    alloted: {
        type: Boolean,
        required: true,
    }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;