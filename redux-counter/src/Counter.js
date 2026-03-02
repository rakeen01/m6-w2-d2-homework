import React from 'react';
import { connect } from 'react-redux';
import './Counter.css';

const Counter = ({ currentCount, dispatch }) => {
  const sendCountAction = (type) => {
    dispatch({ type });
  };

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <div className="counter-display">
        <button className="counter-btn" onClick={() => sendCountAction('DECREMENT')}>-</button>
        <span className="counter-value">{currentCount}</span>
        <button className="counter-btn" onClick={() => sendCountAction('INCREMENT')}>+</button>
      </div>
      <div>
        <button className="counter-btn" onClick={() => sendCountAction('RESET')}>Reset</button>
      </div>
    </div>
  );
};

const selectCount = ({ count }) => ({
  currentCount: count,
});

export default connect(selectCount)(Counter);
