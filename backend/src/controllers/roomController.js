const Room = require('../models/room');
const Student = require('../models/student');
const Login = require('../models/login');

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
    const {selectedRoom} = req.body
    // console.log(selectedRoom);
    const roomNo = selectedRoom
    console.log(roomNo);
    try {
        const room = await Room.findOne({roomNo})
        console.log(room);
        const login = await Login.find();
        console.log(login[0]['rollno']);
        rollno = login[0]['rollno']
        const user = await Student.findOne({rollno})
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if(user.allotedRoom!=null){
            return res.status(200).json({message:'Room already alloted'})
        }
        room.alloted = true
        user.allotedRoom = selectedRoom;
        await user.save();
        await room.save();
        return res.status(200).json({ message: 'Room Alloted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}