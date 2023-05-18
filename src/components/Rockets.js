import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocket } from '../redux/rockets/rocketSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rocket);
  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRocket());
  }, [dispatch, rockets]);

  return (
    <div className="m-8">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          img={rocket.flickr_images}
          type={rocket.type}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
