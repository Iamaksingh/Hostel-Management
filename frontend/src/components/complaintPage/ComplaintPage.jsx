import React from 'react';
import './ComplaintPage.modules.css'; // Import your CSS file
import ComplaintImg from './complaint.jpg';

function ComplaintTicket() {
    return (
        <div>
            <section>
                <div className="main">
                    <div className="image"> 
                        <img src={ComplaintImg} alt="complaint" height="400px" width="600px" />
                    </div>

                    <div className="form">
                        <form>
                            <label htmlFor="name">Enter Name:</label>
                            <input type="text" id="name" placeholder="you" />
                            <label htmlFor="room">Room No :</label>
                            <input type="text" id="Room_no" placeholder="X123" />
                            <div className="dropdown_menu">
                                <label htmlFor="complaint">Complaint type:</label>
                                <select className="select_class" id="complaint">
                                    <option value="internet">Internet</option> 
                                    <option value="electric">Electricity</option> 
                                </select>
                            </div>
                            <button className="submit_button">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ComplaintTicket;
