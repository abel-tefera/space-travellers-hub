import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocket } from '../redux/features/rocket/rocketSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rocket);
  useEffect(() => {
    dispatch(fetchRocket());
  });

  return (
    <div>
      {rockets.map((rocket) => <>{rocket.description}</>)}
    </div>
  );
};

export default Rockets;
