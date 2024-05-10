const Complaint = require('../models/complaints');

exports.reqComplaint = async (req,res)=>{
    const data = req.body;
    try {
        await Complaint.deleteMany({name:req.name,room:req.room,complaint:req.complaint});
        await Complaint.insertMany(data);

        return res.status(200).json({'message':'Success'});
    } catch (error) {
        res.status(500);
        console.log('Error inserting data:',error);
    }
}