import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/loginPage/LoginPage';
import Dashboard from './components/dashboard/DashboardPage';
import CleaningPage from './components/cleaningPage/CleaningPage';
import RoomAllotPage from './components/roomAllotment/RoomAllotment';
import FeePayPage from './components/feePayPage/FeePayPage';
import ComplaintPage from './components/complaintPage/ComplaintPage';
// import LoginPage from './components/loginPage/Login';
// import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/cleaningPage' element={<CleaningPage/>}/>
        <Route path='/roomAllotPage' element={<RoomAllotPage />}/>
        <Route path='/feesPage' element={<FeePayPage />}/>
        <Route path='/complaintPage' element={<ComplaintPage />}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
