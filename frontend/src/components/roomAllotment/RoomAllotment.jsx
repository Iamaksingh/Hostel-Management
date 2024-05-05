import React from 'react';
import './RoomAllotment.modules.css'; // Import your CSS file
import RoomAllotImg from './room_allocation.jpg';

function RoomAllotment() {
    return (
        <div>
            <h1>Select Room</h1>
            <div className="main">
                <div className="hostel">
                    <h3>Block A</h3>
                    <h3>Block B</h3>
                    <div className="block">
                        {/* Buttons for Block A rooms */}
                        {generateRoomButtons('A', 30)}
                    </div>
                    <div className="block">
                        {/* Buttons for Block B rooms */}
                        {generateRoomButtons('B', 30)}
                    </div>
                    <h3>Block C</h3>
                    <h3>Block D</h3>
                    <div className="block">
                        {/* Buttons for Block C rooms */}
                        {generateRoomButtons('C', 30)}
                    </div>
                    <div className="block">
                        {/* Buttons for Block D rooms */}
                        {generateRoomButtons('D', 30)}
                    </div>
                </div>
                <div className="img_submit">
                    <img src={RoomAllotImg} alt="Room Allocation" height="680px" width="600px" />
                    <button className="submit_button">Book Room</button>
                </div>
            </div>
        </div>
    );
}

// Function to generate room buttons for a block
function generateRoomButtons(block, count) {
    const buttons = [];
    for (let i = 1; i <= count; i++) {
        buttons.push(
            <button key={`${block}${i}`} className="room" style={{fontSize:'16px',alignSelf:'start',alignmentBaseline:'central'}}>{block}{i}</button>
        );
    }
    return buttons;
}

export default RoomAllotment;
