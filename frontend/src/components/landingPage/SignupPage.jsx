import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GoogleIcon from "../assets/png/google-icon.png";
import validator from 'validator'

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  
  const handleSubmit = () => {
    
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="ml-10 text-3xl max-w-md font-bold mb-6 w-full text-black">
        Sign up
      </h1>
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
        <div className="flex items-center justify-center mb-4 "></div>
        <button
          className="bg-white w-full hover:bg-slate-200 text-black font-bold py-2 px-4 rounded flex  justify-center items-center focus:outline-none focus:shadow-outline transition-colors duration-200 ease-in-out "
          type="button"
        >
          <img className="w-5 mr-2" src={GoogleIcon} alt="google-icon" />
          <p>Continue with Google</p>
        </button>
        <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4 mt-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-slate-700 transition-colors duration-150 focus:shadow-outline"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            autoComplete="off"
            type="text"
            placeholder="Enter your username"
          />
          <div></div>
        </div>
        <div className="mb-4 mt-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:border-slate-700 transition-colors duration-150 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="focus:border-slate-700 transition-colors duration-150 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors  w-full duration-200 ease-in-out"
            type="submit"
          >
            Sign up
          </button>
        </div>
        </form>
        <div className="text-center">
          <p className="text-black">
            Already have an account?{" "}
            <NavLink
              to="/auth/login"
              className="text-blue-500 hover:text-blue-700 underline transition-colors duration-100 "
            >
              Log in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;