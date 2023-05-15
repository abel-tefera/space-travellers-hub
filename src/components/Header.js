import React from 'react';
import planet from '../assets/planet.png';

const Header = () => (
  <nav>
    <div className="flex flex-row justify-between p-6">
      <div className="flex flex-row items-center">
        <img src={planet} alt="Logo" width={75} height={75} />
        <p className="text-3xl px-4">Space Travellers' Hub</p>
      </div>
      <div className="flex flex-row items-center">
        <p className="px-2 text-base">Rockets</p>
        <p className="px-2 text-base">Missions</p>
        <hr className="rotate-90 px-2" />
        <p className="px-2 text-base">My Profile</p>
      </div>
    </div>
    <hr className="w-full" />
  </nav>
);

export default Header;
