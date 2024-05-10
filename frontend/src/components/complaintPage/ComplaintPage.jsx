import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ComplaintPage.modules.css'; // Import your CSS file
import ComplaintImg from './complaint.jpg';

function ComplaintTicket() {

    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const [complaint,setComplaint] = useState('');
    const navigate = useNavigate();

    async function onSubmit(e){
        e.preventDefault();
        try {
            await axios.post('https://localhost:3001/complaintPage',{
                name,room,complaint
            }).then(result=>{
                console.log(result.data.message);
                if(result.data.message ==='Success')
                    navigate('/dashboard');
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <section>
                <div className="main">
                    <div className="image"> 
                        <img src={ComplaintImg} alt="complaint" height="400px" width="600px" />
                    </div>

                    <div className="form">
                        <form action='POST'>
                            <label htmlFor="name">Enter Name:</label>
                            <input type="text" onChange={(e)=>{setName(e.target.value)}} id="name" placeholder="you" />
                            <label htmlFor="room">Room No :</label>
                            <input type="text" onChange={(e)=>{setRoom(e.target.value)}} id="Room_no" placeholder="X123" />
                            <div className="dropdown_menu">
                                <label htmlFor="complaint">Complaint type:</label>
                                <select className="select_class" onChange={(e)=>{setComplaint(e.target.value)}} id="complaint">
                                    <option value="internet">Internet</option> 
                                    <option value="electric">Electricity</option> 
                                </select>
                            </div>
                            <button className="submit_button" onClick={onSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ComplaintTicket;
