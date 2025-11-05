import React from "react";
import { NavLink } from "react-router";
import { FaEnvelope, FaPhone, FaFacebook, FaGlobe } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#051530] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">
            <span className="text-white">Smart</span>
            <span className="text-purple-500">Deals</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Your trusted marketplace for authentic local products. Discover the
            best deals from across Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/products" className="hover:text-purple-400">All Products</NavLink></li>
            <li><NavLink to="/dashboard" className="hover:text-purple-400">Dashboard</NavLink></li>
            <li><NavLink to="/login" className="hover:text-purple-400">Login</NavLink></li>
            <li><NavLink to="/register" className="hover:text-purple-400">Register</NavLink></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/category/electronics" className="hover:text-purple-400">Electronics</NavLink></li>
            <li><NavLink to="/category/fashion" className="hover:text-purple-400">Fashion</NavLink></li>
            <li><NavLink to="/category/home" className="hover:text-purple-400">Home & Living</NavLink></li>
            <li><NavLink to="/category/groceries" className="hover:text-purple-400">Groceries</NavLink></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact & Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-purple-400" /> support@smartdeals.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-purple-400" /> +880 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <IoLocationSharp className="text-purple-400" /> 123 Commerce Street, Dhaka, Bangladesh
            </li>
          </ul>

          <div className="mt-4">
            <h3 className="text-white font-semibold mb-2">Social Links</h3>
            <div className="flex items-center gap-4 text-lg">
              <a href="#" className="hover:text-purple-400"><FaGlobe /></a>
              <a href="#" className="hover:text-purple-400"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © 2025 <span className="text-white font-medium">SmartDeals</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
