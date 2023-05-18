import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocket.rockets);

  return (
    <div className="flex">
      <div className="w-1/2">
        <h1 className="px-12 ">My Missions</h1>
      </div>
      <div className="w-1/2">
        <h1 className="">My Rockets</h1>

        <div>
          <ul>
            {rockets
              .filter((rocket) => rocket.reserved)
              .map((rocket) => (
                <li className=" py-6 px-5 text-black text-opacity-70 border border-black border-opacity-10" key={rocket.id}>{rocket.name}</li>

              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
