import React from 'react';
import './CleaningPage.modules.css'; // Import your CSS file
import CleaningImg from './cleaning.jpg';

function CleaningPage() {
    return (
        <div>
            <section>
                <div className="main">
                    <div className="image"> 
                        <img src={CleaningImg} alt="cleaning" height="400px" width="600px" />
                    </div>

                    <div className="form">
                        <form>
                            <label htmlFor="name">Enter Name:</label>
                            <input type="text" id="name" placeholder="you" />
                            <label htmlFor="room">Room No :</label>
                            <input type="text" id="Room_no" placeholder="X123" />
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CleaningPage;
