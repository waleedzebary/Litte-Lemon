import './App.css';
import React from 'react';
import Home from './components/home/home';
import BookingPage from './components/booking_page/bookingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './components/booking_page/confirmed_booking/confirmed_booking ';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
