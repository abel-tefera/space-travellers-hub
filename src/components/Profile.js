import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAllMissions } from '../redux/missions/missionsSlice';

const Profile = () => {
  const rockets = useSelector((state) => state.rocket.rockets);
  const missionData = useSelector(selectAllMissions);

  return (
    <div className="flex">
      <div className="w-1/2">
        <h1 className="px-12 py-4 text-3xl text-black text-opacity-80">
          My Missions
        </h1>
        <div className="flex flex-col">
          {missionData
            .filter(({ status }) => status)
            .map(({ mission_name }) => (
              <div key={mission_name} className="p-6">{mission_name}</div>
            ))}
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="px-12 py-4 text-3xl text-black text-opacity-80">
          My Rockets
        </h1>

        <div>
          <ul>
            {rockets
              .filter((rocket) => rocket.reserved)
              .map((rocket) => (
                <li
                  style={{ width: '90%' }}
                  className=" py-6 px-5 text-black text-opacity-70 border border-black border-opacity-10"
                  key={rocket.id}
                >
                  {rocket.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
