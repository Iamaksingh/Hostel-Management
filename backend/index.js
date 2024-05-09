const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');
const cron = require('node-cron');

const Cleaning = require('./src/models/cleaning');
const Complaints = require('./src/models/complaints');
const Room = require('./src/models/room');
const Student = require('./src/models/student');

const loginController = require('./src/controllers/loginController');
const roomController = require('./src/controllers/roomController')
const cleaningController = require('./src/controllers/cleaningController');
const complaintController = require('./src/controllers/complaintController');
const feesController = require('./src/controllers/feesController');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://parth:12341234@cluster0.z0ftypz.mongodb.net/hostel_management?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
});

console.log("connected to mongoDB");

app.post('/',loginController.getLogin);

app.get('/roomAllotPage', roomController.getAllRooms);

app.post('/cleaningPage',cleaningController.reqCleaning);
app.post ('/complaintPage',complaintController.reqComplaint);
app.post('/feesPage',feesController.getFees);

cron.schedule('0 0 * * *', async () => {
    console.log('Running data handling job at midnight...');
    // delete cleaning data at midnight
    await Cleaning.deleteMany();
    // delete Complaints data at midnight
    await Complaints.deleteMany();
});

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

const mockStudent = [
    {name:'Parth Taggar',rollno:102217218,email:'ptaggar_be22@thapar.edu',password:'Penroseconjectrue',allotedRoom:'A1'},
    {name:'Ankit Kumar Mittal',rollno:102217217,email:'amittal5_be22@thapar.edu',password:'12341234',allotedRoom:null},
    {name:'Aditya Kumar Singh',rollno:102217222,email:'Asingh39_be22@thapar.edu',password:'12341234',allotedRoom:'D20'},

];

const insertMockStudents = async ()=>{
    try {
        await Student.deleteMany();
        await Student.insertMany(mockStudent);

        console.log(mockStudent);
    } catch (error) {
        console.log('Error inserting students:',error);
    }
};

// insertMockStudents();

// Call the function to insert mock data
// insertMockData();