import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllMyMissions } from '../redux/missions/missionsSlice';

const Profile = () => {
  const MissionData = useSelector(selectAllMyMissions);

  return (
    <div className="container flex flex-row">
      <div className="flex flex-col">
        {MissionData.map(({ mission_name }) => (
          <div key={mission_name} className="p-6">{mission_name}</div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
