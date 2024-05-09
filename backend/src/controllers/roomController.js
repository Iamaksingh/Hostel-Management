const Room = require('../models/room');

exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
        // console.log(rooms);
    } catch (e) {
        res.status(505);
        console.log(e);
    }
}

exports.allotRoom = async (req,res)=>{
    
}