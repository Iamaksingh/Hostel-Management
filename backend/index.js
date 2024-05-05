const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Room = require('./src/models/room');
const app = express();
const roomController = require('./src/controllers/roomController')
mongoose.connect('mongodb+srv://parth:12341234@cluster0.z0ftypz.mongodb.net/hostel_management?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
});

console.log("connected to mongoDB");

router.get('/roomAllotPage1', roomController.getAllRooms)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mockRooms = [];
let roomNo = '';
let alloted = false;
for (let i = 1; i <= 30; i++) {
    roomNo = `A${i}`;
    alloted = Math.random() < 0.5;
    mockRooms.push({ roomNo, alloted });
    roomNo = `B${i}`;
    alloted = Math.random() < 0.5;
    mockRooms.push({ roomNo, alloted });
    roomNo = `C${i}`;
    alloted = Math.random() < 0.5;
    mockRooms.push({ roomNo, alloted });
    roomNo = `D${i}`;
    alloted = Math.random() < 0.5;
    mockRooms.push({ roomNo, alloted });
}

// console.log(mockRooms)

// Function to insert mock data into the database
const insertMockData = async () => {
    try {
        // Remove existing data
        await Room.deleteMany();

        // Insert mock data
        await Room.insertMany(mockRooms);

        console.log('Mock data inserted successfully');
    } catch (err) {
        console.error('Error inserting mock data:', err);
    }
};

// Call the function to insert mock data
// insertMockData();