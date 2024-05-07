const Complaint = require('../models/complaints');

exports.reqComplaint = async (req,res)=>{
    try {
        const data = req.body;

        await Complaint.deleteMany();
        await Complaint.insertMany(data);

        console.log(data);

        return res.status(200).redirect('/dashboard');
    } catch (error) {
        res.status(500);
        console.log('Error inserting data:',error);
    }
}