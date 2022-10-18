import React from 'react';
import logo from '../../assets/logoAuth.svg';
import { UserCircle } from 'phosphor-react';
import { Button } from '../../components/Button';

export const Dashboard = () => {
  return (
    <div className="bg-gray-700 w-screen h-screen flex flex-col justify-center items-center">
      <img src={logo} alt="logo" className="mb-6" />
      <h1 className="text-xl text-white font-bold mb-10">You are logged in</h1>
      <div className="bg-gray-500 h-52 w-72 flex flex-col items-center gap-8 p-4 text-gray-300 rounded mb-8">
        <div className="flex items-center gap-1">
          <UserCircle width="32" height="32" />
          <h2 className="text-gray-100 text-md">AlexWasHeree</h2>
        </div>
        <div className="bg-gray-300 h-24 w-36 rounded"></div>
      </div>
      <Button className="w-72">Logout</Button>

      <span className="absolute bottom-6">
        <h3 className="text-gray-100">
          <strong>Alex</strong>WasHere
        </h3>
      </span>
    </div>
  );
};
