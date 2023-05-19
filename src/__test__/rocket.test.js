import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rocket from '../components/Rocket';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('Tests for Rocket', () => {
  const rocketInfo = {
    id: 1,
    name: 'Starlink',
    flickr_images: 'https://spacex.com/starlink.jpg',
    description: 'Space Ship',
    reserved: false,
  };

  test('Component exists in the DOM', () => {
    const store = mockStore({});
    const { getByText } = render(
      <Provider store={store}>
        <Rocket
          img={rocketInfo.flickr_images}
          name={rocketInfo.name}
          description={rocketInfo.description}
        />
      </Provider>,
    );
    const rocketName = getByText(rocketInfo.name);
    const description = getByText(rocketInfo.description);

    expect(rocketName).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('Info about Rocket should be displayed', () => {
    const newState = {
      rocket: {
        rockets: [
          {
            id: 1,
            name: 'Starlink',
            flickr_images: 'https://spacex.com/falcon_9.jpg',
            description: 'Falcon star',
            reserved: true,
          },
        ],
      },
    };
    const store = mockStore(newState);
    store.dispatch({
      type: 'rocket/fetchRockets',
      payload: newState,
    });

    render(
      <Provider store={store}>
        <Rocket
          img={rocketInfo.flickr_images}
          name={rocketInfo.name}
          description={rocketInfo.description}
        />
      </Provider>,
    );
    expect(screen.getByText('Starlink')).toBeInTheDocument();
  });
});
