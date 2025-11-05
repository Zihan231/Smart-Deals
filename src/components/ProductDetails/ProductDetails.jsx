import React from "react";
import { NavLink } from "react-router";

const ProductDetails = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Back link */}
      <NavLink
        to="/all-products"
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 mb-4"
      >
        ← Back To Products
      </NavLink>

      {/* 2-col layout */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* LEFT COLUMN: image + description */}
        <div className="space-y-6">
          {/* Image */}
          <div className="bg-gray-200 rounded-md w-full h-[380px]" />

          {/* Description */}
          <div className="card bg-white border border-gray-200 p-4">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Product Description
            </h3>

            <div className="flex flex-wrap justify-between text-sm mb-3 gap-2">
              <p>
                <span className="text-purple-600 font-medium">Condition:</span>{" "}
                New
              </p>
              <p>
                <span className="text-purple-600 font-medium">Usage Time:</span>{" "}
                3 Month
              </p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed border-t pt-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text...
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: title, meta, cards, button */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Yamaha Fz Guitar For Sale
          </h2>

          <div>
            <span className="badge badge-outline text-xs text-purple-600 border-purple-300">
              Art And Hobbies
            </span>
          </div>

          <div>
            <p className="text-green-600 text-lg font-semibold">$22.5 - 30</p>
            <p className="text-sm text-gray-500">Price starts from</p>
          </div>

          {/* Product Details */}
          <div className="card bg-white border border-gray-200">
            <div className="card-body p-4">
              <h3 className="text-sm font-semibold mb-2">Product Details</h3>
              <p className="text-sm text-gray-600">
                <strong>Product ID:</strong> 6875f3ae2174ac368ec882f4
              </p>
              <p className="text-sm text-gray-600">
                <strong>Posted:</strong> 10/19/2024
              </p>
            </div>
          </div>

          {/* Seller Info */}
          <div className="card bg-white border border-gray-200">
            <div className="card-body p-4">
              <h3 className="text-sm font-semibold mb-3">Seller Information</h3>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div>
                  <p className="font-medium text-gray-800">Sara Chen</p>
                  <p className="text-xs text-gray-500">
                    crafts.by.sara@shop.net
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                <strong>Location:</strong> Los Angeles, CA
              </p>
              <p className="text-sm text-gray-600">
                <strong>Contact:</strong> sara.chen.contact
              </p>

              <p className="text-sm text-gray-600 mt-2">
                <strong>Status:</strong>{" "}
                <span className="badge badge-warning badge-sm text-[11px]">
                  On Sale
                </span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <button className="btn w-full bg-gradient-to-r from-purple-500 to-indigo-500 border-none text-white hover:from-purple-600 hover:to-indigo-600">
            I Want Buy This Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
