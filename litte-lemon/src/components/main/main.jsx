// Main.js
import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../booking_page/booking_form/booking_form';
import './main.css';

const initializeTimes = () => {
  const today = new Date();
  return window.fetchAPI(today); // Fetch available times for today
};

const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return window.fetchAPI(action.date); // Fetch available times for the selected date
  }
  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const handleDateChange = (selectedDate) => {
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  // Updated submitForm function to use window.submitAPI
  const submitForm = (formData) => {
    const isSuccess = window.submitAPI(formData);  // Use window.submitAPI
    if (isSuccess) {
      navigate('/confirmed');  // Navigate to the confirmation page
    } else {
      console.error('Failed to submit the booking');
    }
  };

  const handleReserveClick = () => {
    navigate('/booking');
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo erat sit amet erat pulvinar, non interdum nisl sodales.</p>
          <button onClick={handleReserveClick}>Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src="path/to/your-hero-image.png" alt="Little Lemon Restaurant" />
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials">
        <h2>Specials</h2>
        <div className="specials-container">
          {/* Special items */}
        </div>
        <button className="menu-button">Online Menu</button>
      </section>

      {/* BookingForm Section */}
      <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} submitForm={submitForm} />
    </main>
  );
};

export default Main;
