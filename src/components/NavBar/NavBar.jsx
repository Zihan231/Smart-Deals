import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-20">
      {/* Brand */}
      <div className="flex-1">
        <NavLink
          to="/"
          className="text-3xl font-bold flex items-center gap-1 select-none"
        >
          <span className="text-gray-900">Smart</span>
          <span className="text-purple-600">Deals</span>
        </NavLink>
      </div>

      {/* Nav Links */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-purple-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-products"
              className={({ isActive }) =>
                isActive ? "text-purple-600 font-semibold" : ""
              }
            >
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-products"
              className={({ isActive }) =>
                isActive ? "text-purple-600 font-semibold" : ""
              }
            >
              My Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-bids"
              className={({ isActive }) =>
                isActive ? "text-purple-600 font-semibold" : ""
              }
            >
              My Bids
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create-product"
              className={({ isActive }) =>
                isActive ? "text-purple-600 font-semibold" : ""
              }
            >
              Create Product
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex-none flex items-center gap-4 ml-4">
        <NavLink to="/login">
          <button
            className="text-base btn btn-outline btn-sm text-purple-600 border-purple-400 hover:bg-purple-100 hover:border-purple-500 hover:text-purple-700 px-5 py-5 transition-all duration-300 hover:shadow-md"
          >
            Login
          </button>
        </NavLink>

        <NavLink to="/register">
          <button
            className="text-base btn btn-primary btn-sm bg-gradient-to-r from-purple-500 to-indigo-500 border-none text-white px-5 py-5 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 hover:shadow-md"
          >
            Register
          </button>
        </NavLink>
      </div>

    </div>
  );
};

export default NavBar;
