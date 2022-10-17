import React from 'react';
import logo from '../../assets/logoAuth.svg';
import { TextInput } from '../../components/TextInput';
import { UserCircle, Key } from 'phosphor-react';

export const Login = () => {
  return (
    <div className="bg-gray-700 w-screen h-screen flex flex-col justify-center items-center">
      <img src={logo} alt="logo" className="mb-6" />
      <h1 className="text-xl text-white font-bold mb-10">Auth Login Project</h1>

      <div className="flex flex-col gap-6">
        <label htmlFor="user">
          <h2 className="text-gray-300 text-md mb-3">User</h2>

          <TextInput.Root>
            <TextInput.Icon>
              <UserCircle />
            </TextInput.Icon>
            <TextInput.Input
              type="text"
              id="user"
              placeholder="Your username"
            ></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="password">
          <h2 className="text-gray-300 text-md mb-3">Password</h2>

          <TextInput.Root>
            <TextInput.Icon>
              <Key />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="*******"
            ></TextInput.Input>
          </TextInput.Root>
        </label>
      </div>
    </div>
  );
};
