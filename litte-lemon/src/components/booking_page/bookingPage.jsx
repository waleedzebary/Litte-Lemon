// BookingPage.js
import React from 'react';
import BookingForm from './booking_form/booking_form';
import './bookingPage.css';

const BookingPage = () => {
  return (
    <div className="booking-page">
      <header className="booking-header">
        <button className="back-button" onClick={() => window.history.back()}>
          &#8592;
        </button>
        <img src="path/to/logo.png" alt="Little Lemon" className="logo" />
        <button className="cart-button">&#128722;</button>
      </header>

      <h1>Reserve a Table</h1>
      <p>To reserve a table, please fill out this form.</p>

      <BookingForm /> {/* Use the BookingForm component here */}
    </div>
  );
};

export default BookingPage;
