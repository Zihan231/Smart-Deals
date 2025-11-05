import React from "react";
import { NavLink } from "react-router";

const CreateProduct = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Top back link + Title */}
      <div className="max-w-3xl mx-auto mb-6">
        <NavLink
          to="/all-products"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
        >
          <span>←</span> Back To Products
        </NavLink>

        <h1 className="mt-3 text-3xl font-bold text-center md:text-left">
          <span className="text-gray-900">Create </span>
          <span className="text-purple-600">A Product</span>
        </h1>
      </div>

      {/* Card */}
      <div className="max-w-3xl mx-auto">
        <div className="card bg-white shadow-md border border-gray-200">
          <div className="card-body">
            {/* Grid form (design only) */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Title */}
              <div className="md:col-span-1">
                <label className="label">
                  <span className="label-text text-gray-700">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Yamaha Fz Guitar for Sale"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Category */}
              <div className="md:col-span-1">
                <label className="label">
                  <span className="label-text text-gray-700">Category</span>
                </label>
                <select className="select select-bordered w-full">
                  <option defaultValue="">Select a Category</option>
                  <option>Electronics</option>
                  <option>Bicycle & E-Bike</option>
                  <option>Fashion</option>
                  <option>Home & Living</option>
                  <option>Groceries</option>
                </select>
              </div>

              {/* Min / Max price */}
              <div>
                <label className="label">
                  <span className="label-text text-gray-700">
                    Min Price you want to Sale ($)
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="e.g. 18.5"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-gray-700">
                    Max Price you want to Sale ($)
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Optional (default = Min Price)"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Condition + Usage time */}
              <div>
                <label className="label">
                  <span className="label-text text-gray-700">
                    Product Condition
                  </span>
                </label>
                <div className="flex items-center gap-6 pl-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="condition" className="radio radio-primary" defaultChecked />
                    <span>Brand New</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="condition" className="radio" />
                    <span>Used</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-gray-700">
                    Product Usage time
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1 year 3 month"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Product Image URL (full width) */}
              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text text-gray-700">
                    Your Product Image URL
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="input input-bordered w-full"
                />
              </div>

              {/* Seller Name / Email */}
              <div>
                <label className="label">
                  <span className="label-text text-gray-700">Seller Name</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Artisan Roasters"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-gray-700">Seller Email</span>
                </label>
                <input
                  type="email"
                  placeholder="lei13595@nrlord.com"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Seller Contact / Image URL */}
              <div>
                <label className="label">
                  <span className="label-text text-gray-700">Seller Contact</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. +1-555-1234"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-gray-700">Seller Image URL</span>
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="input input-bordered w-full"
                />
              </div>

              {/* Location (full) */}
              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text text-gray-700">Location</span>
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Description (full) */}
              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text text-gray-700">
                    Simple Description about your Product
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full min-h-[110px]"
                  placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time..."
                />
              </div>

              {/* Submit (full width) */}
              <div className="md:col-span-2">
                <button
                  type="button"
                  className="btn w-full bg-gradient-to-r from-purple-500 to-indigo-500 border-none text-white"
                >
                  Create A Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
