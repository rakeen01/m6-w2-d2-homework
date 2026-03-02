import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const defaultCounterState = { count: 0 };

const countReducer = (state = defaultCounterState, action) => {
  if (action.type === 'INCREMENT') {
    return { count: state.count + 1 };
  }

  if (action.type === 'DECREMENT') {
    return { count: state.count - 1 };
  }

  if (action.type === 'RESET') {
    return { ...defaultCounterState };
  }

  return state;
};

const counterStore = configureStore({
  reducer: countReducer,
});

const CounterApp = () => (
  <Provider store={counterStore}>
    <Counter />
  </Provider>
);

const rootElement = createRoot(document.getElementById('root'));
rootElement.render(<CounterApp />);
