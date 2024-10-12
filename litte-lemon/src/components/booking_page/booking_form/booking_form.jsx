import React, { useState } from 'react';
import './booking_form.css';

const BookingForm = ({ availableTimes, onDateChange, submitForm }) => {
  const [formData, setFormData] = useState({
    branch: '',
    date: '',
    time: '',
    guests: 1,
    name: '',
    email: '',
    phoneNumber: '',
    specialInstruction: '',
    agree: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const { branch, date, time, guests, name, email, phoneNumber, agree } = formData;
    const isValid =
      branch &&
      date &&
      time &&
      guests > 0 &&
      name &&
      email &&
      /^\+?[0-9]{10,15}$/.test(phoneNumber) &&
      agree;
    setIsFormValid(isValid);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      submitForm(formData);
    }
  };

  const handleDateChange = (e) => {
    handleChange(e);
    onDateChange(e.target.value);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Select Branch *
        <select name="branch" value={formData.branch} onChange={handleChange} required>
          <option value="" disabled>Select a branch</option>
          <option value="branch1">Branch 1</option>
          <option value="branch2">Branch 2</option>
        </select>
      </label>

      <label>
        Select Date *
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleDateChange}
          required
        />
      </label>

      <label>
        Select Time *
        <select name="time" value={formData.time} onChange={handleChange} required>
          <option value="" disabled>Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
      </label>

      <label>
        Number of Guests *
        <input
          type="number"
          name="guests"
          value={formData.guests}
          min="1"
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Name *
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email *
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone Number *
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          pattern="^\+?[0-9]{10,15}$"
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Special Instructions
        <textarea
          name="specialInstruction"
          value={formData.specialInstruction}
          onChange={handleChange}
        />
      </label>

      <label>
        Agree to terms *
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" className="reserve-button" disabled={!isFormValid}>
        Reserve a Table
      </button>
    </form>
  );
};

export default BookingForm;
