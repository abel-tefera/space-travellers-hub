import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from '../components/Missions';

const mockStore = configureStore([]);

describe('Missions tests', () => {
  test('should render mission details on to the screen', () => {
    const newState = {
      missionsData: [],
    };
    const store = mockStore(newState);
    store.dispatch({
      type: 'GET_MISSIONS',
      payload: newState,
    });

    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(screen.getByText('Thaicom')).toBeInTheDocument();
  });
});
