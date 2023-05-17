import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Header = () => (
  <>
    <nav>
      <div className="flex flex-row justify-between p-6">
        <div className="flex flex-row items-center">
          <img src={planet} alt="Logo" width={75} height={75} />
          <p className="text-3xl px-4">Space Travellers&apos; Hub</p>
        </div>
        <div className="md:flex flex-row items-center hidden">
          <NavLink
            to="/"
            className={({ isActive, isPending }) => (isPending ? '' : isActive ? 'underline text-blue-500' : '')}
          >
            <p className="px-2 text-base">Rockets</p>
          </NavLink>
          <NavLink
            to="/missions"
            className={({ isActive, isPending }) => (isPending ? '' : isActive ? 'underline text-blue-500' : '')}
          >
            <p className="px-2 text-base">Missions</p>
          </NavLink>
          <hr className="rotate-90 px-2" />
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) => (isPending ? '' : isActive ? 'underline text-blue-500' : '')}
          >
            <p className="px-2 text-base">My Profile</p>
          </NavLink>
        </div>
      </div>
      <hr className="w-full" />
    </nav>

    <Outlet />
  </>
);

export default Header;
