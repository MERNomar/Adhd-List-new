import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/png/google-icon.png";
import { postLogin } from "./authApis";
import { useUser } from "../../store/authState";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const user = useUser((user) => user.user);
  const setUser = useUser((user) => user.setUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (!email | !password) {
      return setError("Please set all fields !");
    }
    postLogin({ email, password })
      .then((user) => setUser(user))
      .catch((err) => setError(err));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="w-full max-w-md mb-6 ml-10 text-3xl font-bold text-black">
        Login
      </h1>
      <div className="relative w-full max-w-md px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <button
          className="flex items-center justify-center w-full px-4 py-2 font-bold text-black transition-colors duration-200 ease-in-out bg-white rounded hover:bg-slate-200 focus:outline-none focus:shadow-outline "
          type="button"
        >
          <img className="w-5 mr-2" src={GoogleIcon} alt="google-icon" />
          <p>Continue with Google</p>
        </button>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mt-4 mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 leading-normal text-gray-700 transition-colors duration-150 border rounded shadow appearance-none focus:border-slate-700 focus:outline-none focus:shadow-outline"
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
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 leading-normal text-gray-700 transition-colors duration-150 border rounded shadow appearance-none focus:border-slate-700 focus:outline-none focus:shadow-outline"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
              minLength={8}
              type="password"
              placeholder="********"
            />
          </div>
          <div className="text-red-700  text-center w-[70%] bg-red-200 border-red-700 m-auto my-2">
            {error && error}
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              className="w-full px-4 py-2 font-bold text-white duration-200 ease-in-out bg-blue-500 rounded transition-color hover:bg-blue-700 focus:outline-none focus:shadow-outline"
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
              className="text-blue-500 underline duration-100 hover:text-blue-700 "
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
