import React, { useState } from 'react';

const availableTimes = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="">Select an occasion</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>

      <button type="submit">Submit reservation</button>
    </form>
  );
}
