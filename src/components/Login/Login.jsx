import React from "react";
import { NavLink } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="card w-full max-w-sm bg-white shadow-md border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-center mb-2">Login</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Don’t have an account?{" "}
          <NavLink to="/register" className="text-purple-600 hover:underline">
            Register Now
          </NavLink>
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="input input-bordered w-full"
            />
            <p className="text-right text-xs text-gray-500 mt-1 hover:underline cursor-pointer">
              Forgot password?
            </p>
          </div>

          <button
            type="button"
            className="btn w-full mt-3 bg-gradient-to-r from-purple-500 to-indigo-500 border-none text-white"
          >
            Sign In
          </button>

          <div className="divider text-sm text-gray-500">OR</div>

          <button
            type="button"
            className="btn w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign In With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
