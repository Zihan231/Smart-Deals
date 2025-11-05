import React from "react";
import { NavLink } from "react-router";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="card w-full max-w-sm bg-white shadow-md border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-center mb-2">Register Now!</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Already have an account?{" "}
          <NavLink to="/login" className="text-purple-600 hover:underline">
            Login Now
          </NavLink>
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Mariam Swarna"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="smswokothasan@gmail.com"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image-URL
            </label>
            <input
              type="text"
              placeholder="Enter your image link"
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
          </div>

          <button
            type="button"
            className="btn w-full mt-3 bg-linear-to-r from-purple-500 to-indigo-500 border-none text-white"
          >
            Register
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
            Sign Up With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
