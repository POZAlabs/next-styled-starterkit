import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../store';
const defaultStore = store;

export const renderWithRedux = (ui: React.ReactNode, store = defaultStore) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  }
}