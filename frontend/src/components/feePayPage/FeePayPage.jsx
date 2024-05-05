import React from 'react';
import './FeePayPage.modules.css'; // Import your CSS file
import FeePayImg from './fee_payment.jpg';

function FeesPayment() {
    return (
        <div className="main">
            <form>
                <div className="form"> 
                    <h1>Fees Payment</h1>
                    <br />
                    <label htmlFor="Name">Name : </label>
                    <input type="text" id="c_name" placeholder="John M. Doe" />
                    <label htmlFor="email">Email : </label>
                    <input type="text" id="c_email" placeholder="john@example.com" />
                    <label htmlFor="Hostel">Hostel allotted : </label>
                    <input type="text" id="c_hostel" placeholder="A" />
                    <label htmlFor="room">Room allotted : </label>
                    <input type="text" id="c_room" placeholder="A123" />
                    <label htmlFor="fees amount">Fees amount : </label>
                    <input type="number" id="c_fees_amount" placeholder="12345" />
                    <label htmlFor="card_number">Card No :</label>
                    <input type="text" id="c_card_no" placeholder="XXXX-XXXX-XXXX-XXXX" />
                    <label htmlFor="card_name">Name on card : </label>
                    <input type="text" id="c_card_name" placeholder="John M. Doe" />
                    <label htmlFor="exp_date">Expiry date :</label> 
                    <input type="text"  id="c_Expiry_date" placeholder="MM/DD" />
                    <label htmlFor="cvv">cvv :</label> 
                    <input type="number"  id="c_cvv" placeholder="XXX" />
                    <button className="submit_button">Submit</button>
                </div>
            </form>

            <div className="image">
                <img src={FeePayImg} alt="Fee Payment" height="900px" width="900px" />
            </div>
        </div>
    );
}

export default FeesPayment;
