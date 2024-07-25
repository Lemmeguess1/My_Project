import React from 'react';
import './Main.css';import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';import React, { useReducer } from 'react';
import { initialState, timesReducer } from './reducer';


function Main() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  };
  return (
    <div>
      <BookingForm availableTimes={state.availableTimes} onDateChange={updateTimes} />
      <BookingSlot availableTimes={state.availableTimes} />
    </div>
  );
}
// Initial state for available times
const initialState = {
  availableTimes: [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ],
};

// Reducer function to manage available times
function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Logic to update times based on the selected date (for now, returning same times)
      return {
        ...state,
        availableTimes: state.availableTimes, // Update based on date if needed
      };
    default:
      return state;
  }
}

