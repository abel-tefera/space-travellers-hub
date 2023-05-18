import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllMissions } from '../redux/missions/missionsSlice';

const Profile = () => {
  const missionData = useSelector(selectAllMissions);

  return (
    <div className="container flex flex-row">
      <div className="flex flex-col">
        {missionData
          .filter(({ status }) => status)
          .map(({ mission_name }) => (
            <div key={mission_name} className="p-6">{mission_name}</div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
