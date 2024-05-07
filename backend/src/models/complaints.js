const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    room:{
        type:String,
        requried:true
    },
    complaint:{
        type:String,
        requried:true
    }
},{collection:'complaints'});

const Complaint = mongoose.model('Complaint',complaintSchema);

module.exports = Complaint;