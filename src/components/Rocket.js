import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReserve } from '../redux/rockets/rocketSlice';

const Rocket = ({
  id, name, description, img, type, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex m-8">
      <div className="w-72">
        <div style={{ width: '18rem' }}>
          <img src={`${img}`} alt={name} />
        </div>
      </div>

      <div className="flex-auto mx-5">
        <div>
          <h1 className="font-bold">{name}</h1>
          <div className="mt-3 ">
            {reserved && (
              <div>
                <button type="button" className="inline-block p-1 mr-3 bg-blue-500 text-white text-xs rounded-md">
                  Reserved
                </button>
                {description}

                <button
                  type="button"
                  className="block p-2 mt-3 rounded-md border border-black border-opacity-40 bg-white text-black text-opacity-50"
                  onClick={() => dispatch(cancelReserve(id))}
                >
                  Cancel Reservation
                </button>
              </div>
            )}

            {!reserved && (
              <div>
                <div>{description}</div>
                <button
                  type="button"
                  className="p-2 mt-3 rounded-md bg-blue-500 text-white"
                  onClick={() => dispatch(reserveRocket(id))}
                >
                  Reserve Rocket
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rocket;
