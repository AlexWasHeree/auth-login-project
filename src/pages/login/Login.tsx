import React from 'react';
import logo from '../../assets/logoAuth.svg';
import { TextInput } from '../../components/TextInput';
import { UserCircle, Key } from 'phosphor-react';
import { Button } from '../../components/Button';

export const Login = () => {
  return (
    <div className="bg-gray-700 w-screen h-screen flex flex-col justify-center items-center">
      <img src={logo} alt="logo" className="mb-6" />
      <h1 className="text-xl text-white font-bold mb-10">Auth Login Project</h1>

      <form className="flex flex-col gap-6 mb-8">
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

        <label htmlFor="password" className="mb-2">
          <h2 className="text-gray-300 text-md mb-6">Password</h2>

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

        <Button>Login</Button>
      </form>

      <a href="" className="text-gray-300 text-center underline mb-3">
        New here? Create a new account
      </a>
      <a href="" className="text-gray-300 text-center underline">
        Forgot password
      </a>
    </div>
  );
};
