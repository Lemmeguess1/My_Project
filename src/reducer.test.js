// reducer.test.js
import { reducer, initialState } from './Main'; // Adjust import path as needed

describe('Reducer Functions', () => {
  test('initializeTimes function returns the correct initial state', () => {
    const result = reducer(initialState, { type: 'INIT' }); // Adjust action type if needed
    expect(result.availableTimes).toEqual([
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
    ]);
  });

  test('updateTimes function returns the same available times', () => {
    const newState = {
      availableTimes: [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
      ],
    };
    const result = reducer(newState, { type: 'UPDATE_TIMES', date: '2024-07-25' }); // Sample action
    expect(result.availableTimes).toEqual(newState.availableTimes);
  });
});
