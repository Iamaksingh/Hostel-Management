import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RoomAllotment.modules.css'; // Import your CSS file
import RoomAllotImg from './room_allocation.jpg';

function RoomAllotment() {
    const [response, setResponse] = useState('');
    const [selectedRoom, setSelectedRoom] = useState('');
    const [clickedRoom, setClickedRoom] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        async function getRoomData() {
            try {
                const response = await axios.get('http://localhost:3001/roomAllotPage');
                setResponse(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getRoomData();
    }, []);

    const handleRoomSelection = (roomNo) => {
        setSelectedRoom(roomNo);
        setClickedRoom(roomNo);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('reached here');
            if (!selectedRoom) {
                console.log('Please select a room before submitting');
                return;
            }

            // Send selected room to backend
            await axios.post('http://localhost:3001/roomAllotPage/',  {selectedRoom} ).then(
                result => {
                    if (result.data.message === 'Room Alloted successfully') {
                        alert('Room has been alloted');
                        navigate('/dashboard');
                    } else if (result.data.message === 'Room already alloted') {
                        alert('User has already been alloted a room');
                        navigate('/dashboard');
                    }
                }
            );
            console.log('Selected room sent to backend:', selectedRoom);
            // You can add further logic here if needed
        } catch (error) {
            console.log(error);
        }
    };

    // Function to generate room buttons for a block
    const generateRoomButtons = (block, count, rooms) => {
        const buttons = [];
        for (let i = 1; i <= count; i++) {
            let alloted = false;
            for (let j = 0; j < rooms.length; j++) {
                if (rooms[j].roomNo === `${block}${i}`) {
                    alloted = rooms[j].alloted;
                    break;
                }
            }

            let style = { backgroundColor: 'white' };
            if (alloted) {
                style.color = 'red';
            } else if (clickedRoom === `${block}${i}`) {
                style.color = 'yellow';
            }

            buttons.push(
                <button key={`${block}${i}`} className="room" onClick={() => handleRoomSelection(`${block}${i}`)} style={style}>{block}{i}</button>
            );
        }
        return buttons;
    };

    return (
        <div>
            <h1>Select Room</h1>
            <div className="main">
                <div className="hostel">
                    <h3>Block A</h3>
                    <h3>Block B</h3>
                    <div className="block">
                        {/* Buttons for Block A rooms */}
                        {generateRoomButtons('A', 30, response)}
                    </div>
                    <div className="block">
                        {/* Buttons for Block B rooms */}
                        {generateRoomButtons('B', 30, response)}
                    </div>
                    <h3>Block C</h3>
                    <h3>Block D</h3>
                    <div className="block">
                        {/* Buttons for Block C rooms */}
                        {generateRoomButtons('C', 30, response)}
                    </div>
                    <div className="block">
                        {/* Buttons for Block D rooms */}
                        {generateRoomButtons('D', 30, response)}
                    </div>
                </div>
                <div className="img_submit">
                    <img src={RoomAllotImg} alt="Room Allocation" height="680px" width="600px" />
                    <button className="submit_button" onClick={handleSubmit}>Book Room</button>
                </div>
            </div>
        </div>
    );
}

export default RoomAllotment;
