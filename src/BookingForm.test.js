// BookingForm.test.js
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the "Choose date" label', () => {
  render(<BookingForm availableTimes={[]} onDateChange={() => {}} />);
  const labelElement = screen.getByText(/Choose date/i); // Use regex to match case-insensitive text
  expect(labelElement).toBeInTheDocument();
});
