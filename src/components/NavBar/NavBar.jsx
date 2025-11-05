import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
      {/* Brand */}
      <div className="flex-1">
        <NavLink
          to="/"
          className="text-xl font-bold flex items-center gap-1 select-none"
        >
          <span className="text-gray-900">Smart</span>
          <span className="text-purple-600">Deals</span>
        </NavLink>
      </div>

      {/* Nav Links */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm font-medium text-gray-700">
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
          <button className="btn btn-outline btn-sm text-purple-600 border-purple-400 hover:bg-purple-50 px-5">
            Login
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="btn btn-primary btn-sm bg-gradient-to-r from-purple-500 to-indigo-500 border-none text-white px-5">
            Register
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
