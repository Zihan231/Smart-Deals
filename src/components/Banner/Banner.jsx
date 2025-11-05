import React from "react";
import { NavLink } from "react-router";
import { FaSearch } from "react-icons/fa";
import leftImg from "../../assets/img/bg-hero-left.png";
import rightImg from "../../assets/img/bg-hero-right.png";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#ffc3fa] via-[#EEF0F8] to-[#E0F8F5] py-20">
      {/* Left decorative image */}
      <img
        src={leftImg}
        alt="left decoration"
        className="absolute left-0 bottom-0 w-40 md:w-56 opacity-40"
      />
      {/* Right decorative image */}
      <img
        src={rightImg}
        alt="right decoration"
        className="absolute right-0 top-0 w-52 md:w-64 opacity-40"
      />

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Deal Your <span className="text-purple-600">Products</span>
          <br />
          In A <span className="text-purple-600">Smart</span> Way !
        </h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search for Products, Categories..."
              className="input input-bordered w-full pr-12 rounded-full"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full">
              <FaSearch className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <NavLink to="/all-products">
            <button className="btn btn-sm md:btn-md bg-linear-to-br from-[#632EE3] to-[#9F62F2] border-none text-white hover:bg-purple-700">
              Watch All Products
            </button>
          </NavLink>
          <NavLink to="/create-product">
            <button className="btn btn-sm md:btn-md btn-outline text-purple-600 border-purple-400 hover:bg-purple-50">
              Post an Product
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Banner;
