import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CleaningPage.modules.css'; // Import your CSS file
import CleaningImg from './cleaning.jpg';

function CleaningPage() {

    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    const navigate = useNavigate();

    async function onSubmit(e){
        e.preventDefault();

        try {
            await axios.post('https://hostel-management-blond.vercel.app/cleaningPage',{
                name,room
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
                        <img src={CleaningImg} alt="cleaning" height="400px" width="600px" />
                    </div>

                    <div className="form">
                        <form action='POST'>
                            <label htmlFor="name">Enter Name:</label>
                            <input type="text" onChange={(e)=>{setName(e.target.value)}} id="name" placeholder="you" />
                            <label htmlFor="room">Room No :</label>
                            <input type="text" onChange={(e)=>{setRoom(e.target.value)}} id="Room_no" placeholder="X123" />
                            <button onClick={onSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CleaningPage;
