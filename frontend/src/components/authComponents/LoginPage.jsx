import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/png/google-icon.png";
import { postLogin } from "./authApis";
import { useUser } from "../../store/authState";

export default function Signup () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error , setError] = useState(null)
  
  const user = useUser(user => user.user)
  const setUser = useUser(user => user.setUser)

  
  console.log(user)
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    if(!email | !password) {
      return setError("Please set all fields !")
    }
    postLogin({ email , password  })
    .then(user => setUser(user))
    .catch(err => setError(err))
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="ml-10 text-3xl max-w-md font-bold mb-6 w-full text-black">
        Login
      </h1>
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
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
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:border-slate-700 transition-colors duration-150 text-gray-700 leading-normal focus:outline-none focus:shadow-outline"
            id="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            type="email"
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
            className="focus:border-slate-700 transition-colors duration-150 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-normal focus:outline-none focus:shadow-outline"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
            minLength={8}
            type="password"
            placeholder="********"
          />
        </div>
        <div className="text-red-700  text-center w-[70%] bg-red-200 border-red-700 m-auto my-2">{error && error}</div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-blue-500  transition-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline   w-full duration-200 ease-in-out"
            type="submit"
          >
            Log in
          </button>
        </div>
        </form>
        <div className="text-center">
          <p className="text-black">
            Already have an account?{" "}
            <Link
              to="/auth/signup"
              className="text-blue-500 hover:text-blue-700 underline duration-100 "
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

