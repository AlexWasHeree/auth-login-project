import React from 'react';
import logo from '../../assets/logoAuth.svg';

export const Login = () => {
  return (
    <div className="bg-gray-700 w-screen h-screen flex flex-col justify-center items-center">
      <img src={logo} alt="logo" className="mb-6" />
      <h1 className="text-lg text-white font-bold">Auth Login Project</h1>
    </div>
  );
};
