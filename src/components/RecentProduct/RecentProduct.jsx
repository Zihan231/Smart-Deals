import React from "react";
import { NavLink } from "react-router";

const RecentProduct = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight ">
          <span className="text-gray-900">Recent </span>
          <span className="text-purple-600 ">
            Products
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="card bg-white shadow-sm border border-gray-200">
          <figure className="p-4">
            <div className="w-full h-44 rounded-md bg-gray-200" />
          </figure>
          <div className="card-body pt-0">
            <h3 className="text-sm font-medium text-gray-800">
              Yamaha Fz Guitar [ Full Fresh Condition ]
            </h3>
            <p className="text-xs text-purple-600 font-semibold mt-1">
              $ 55.99- 75
            </p>
            <div className="mt-3">
              <NavLink to="/products/1" className="w-full">
                <button className="btn btn-sm btn-outline w-full text-purple-600 border-purple-300">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-white shadow-sm border border-gray-200">
          <figure className="p-4">
            <div className="w-full h-44 rounded-md bg-gray-200" />
          </figure>
          <div className="card-body pt-0">
            <h3 className="text-sm font-medium text-gray-800">
              Hero Splender Ev – [ 2 Year Used ]
            </h3>
            <p className="text-xs text-purple-600 font-semibold mt-1">
              $ 55.99- 75
            </p>
            <div className="mt-3">
              <NavLink to="/products/2" className="w-full">
                <button className="btn btn-sm btn-outline w-full text-purple-600 border-purple-300">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-white shadow-sm border border-gray-200">
          <figure className="p-4">
            <div className="w-full h-44 rounded-md bg-gray-200" />
          </figure>
          <div className="card-body pt-0">
            <h3 className="text-sm font-medium text-gray-800">
              Duranta E-Bike  With 97% Battery Life [ 1 Month Used ]
            </h3>
            <p className="text-xs text-purple-600 font-semibold mt-1">
              $ 55.99- 75
            </p>
            <div className="mt-3">
              <NavLink to="/products/3" className="w-full">
                <button className="btn btn-sm btn-outline w-full text-purple-600 border-purple-300">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-white shadow-sm border border-gray-200">
          <figure className="p-4">
            <div className="w-full h-44 rounded-md bg-gray-200" />
          </figure>
          <div className="card-body pt-0">
            <h3 className="text-sm font-medium text-gray-800">
              Yamaha Fz Guitar [ Full Fresh Condition ]
            </h3>
            <p className="text-xs text-purple-600 font-semibold mt-1">
              $ 55.99- 75
            </p>
            <div className="mt-3">
              <NavLink to="/products/4" className="w-full">
                <button className="btn btn-sm btn-outline w-full text-purple-600 border-purple-300">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card bg-white shadow-sm border border-gray-200">
          <figure className="p-4">
            <div className="w-full h-44 rounded-md bg-gray-200" />
          </figure>
          <div className="card-body pt-0">
            <h3 className="text-sm font-medium text-gray-800">
              Hero Splender Ev – [ 2 Year Used ]
            </h3>
            <p className="text-xs text-purple-600 font-semibold mt-1">
              $ 55.99- 75
            </p>
            <div className="mt-3">
              <NavLink to="/products/5" className="w-full">
                <button className="btn btn-sm btn-outline w-full text-purple-600 border-purple-300">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card bg-white shadow-sm border border-gray-200">
          <figure className="p-4">
            <div className="w-full h-44 rounded-md bg-gray-200" />
          </figure>
          <div className="card-body pt-0">
            <h3 className="text-sm font-medium text-gray-800">
              Duranta E-Bike  With 97% Battery Life [ 1 Month Used ]
            </h3>
            <p className="text-xs text-purple-600 font-semibold mt-1">
              $ 55.99- 75
            </p>
            <div className="mt-3">
              <NavLink to="/products/6" className="w-full">
                <button className="btn btn-sm btn-outline w-full text-purple-600 border-purple-300">
                  View Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Show All */}
      <div className="text-center mt-8">
        <NavLink to="/all-products">
          <button className="btn btn-sm bg-gradient-to-r from-purple-500 to-indigo-500 border-none text-white px-6">
            Show All
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default RecentProduct;
