import React from 'react';
import './Dashboard.modules.css'; // Import your CSS file
import LogOutImg from './logout_icon.png';
import HomeImg from './home_icon.png';
import AllotRoomImg from './allot_room.jpg';
import CleaningImg from './cleaning.jpg';
import FeesPayImg from './fees.jpg';
import ElecrtricCompImg from './electric_fault.jpg';

function Dashboard() {
  return (
    <body style={{ backgroundImage: `url("background.jpg")` }}>
      <div className="sign_out_greeting">
        <h1>Welcome</h1>
        <a href="#"><img src={LogOutImg} height="12px" width="15px" /> Sign out</a>
      </div>

      <div className="homepage">
        <h3><img src={HomeImg} height="20px" width="20px" /> Dashboard</h3>
      </div>

      <div className="Dashboard">
        <div className="card" id="room_allot_button">
          <a href="#"><img src={AllotRoomImg} height="300px" width="300px" /></a>
          <p className="txt">Room<br />Allotment</p>
        </div>
        <div className="card" id="cleaning">
          <a href="#"><img src={CleaningImg} height="300px" width="300px" /></a>
          <p className="txt">Cleaning</p>
        </div>
        <div className="card" id="fees_payment">
          <a href="#"><img src={FeesPayImg} height="300px" width="300px" /></a>
          <p className="txt">Fees<br />Payment</p>
        </div>
        <div className="card" id="complaint">
          <a href="#"><img src={ElecrtricCompImg} height="300px" width="300px" /></a>
          <p className="txt">Complaints</p>
        </div>
      </div>
    </body>
  );
}

export default Dashboard;
