import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from '../booking_page/booking_form/booking_form';

test('disables submit button if form is invalid', () => {
  render(<BookingForm availableTimes={['12:00 PM']} onDateChange={() => {}} submitForm={() => {}} />);
  
  const submitButton = screen.getByText(/Reserve a Table/i);
  
  // Initially, the form should be invalid and the submit button should be disabled
  expect(submitButton).toBeDisabled();

  // Fill in valid data to enable the form submission
  fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '+1234567890' } });
  fireEvent.change(screen.getByLabelText(/Select Date/i), { target: { value: '2023-10-01' } });
  fireEvent.change(screen.getByLabelText(/Select Time/i), { target: { value: '12:00 PM' } });
  fireEvent.click(screen.getByLabelText(/Agree to terms/i));

  // Now the form should be valid and the submit button should be enabled
  expect(submitButton).not.toBeDisabled();
});

test('calls submitForm function when form is submitted with valid data', () => {
  const mockSubmitForm = jest.fn();
  
  render(<BookingForm availableTimes={['12:00 PM']} onDateChange={() => {}} submitForm={mockSubmitForm} />);

  fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '+1234567890' } });
  fireEvent.change(screen.getByLabelText(/Select Date/i), { target: { value: '2023-10-01' } });
  fireEvent.change(screen.getByLabelText(/Select Time/i), { target: { value: '12:00 PM' } });
  fireEvent.click(screen.getByLabelText(/Agree to terms/i));

  const submitButton = screen.getByText(/Reserve a Table/i);
  fireEvent.click(submitButton);

  expect(mockSubmitForm).toHaveBeenCalledTimes(1);
});
