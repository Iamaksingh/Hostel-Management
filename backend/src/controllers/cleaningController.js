const Cleaning = require('../models/cleaning');

exports.reqCleaning = async (req,res)=>{
    // console.log(req.body);
    const isDone = false;
    const {name,room} = req.body;
    try {
        const data = {name,room,isDone};
        await Cleaning.deleteMany();
        await Cleaning.insertMany(data);
        return res.status(200).redirect('/dashboard');
    } catch (error) {
        res.status(500);
        console.log('Error in inserting cleaning req:',error);
    }
}