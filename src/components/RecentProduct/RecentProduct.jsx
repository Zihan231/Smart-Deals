import React from "react";
import { NavLink, useLoaderData } from "react-router";
import ProductCard from "../ProductCard/ProductCard";

const RecentProduct = () => {
  const recentProducts = useLoaderData();
  console.log(recentProducts.map(x=>x));
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
        {
          recentProducts.map(item => <ProductCard key={item._id} singleProduct={ item }></ProductCard>)
        }
      </div>

      {/* Show All */}
      <div className="text-center mt-8">
        <NavLink to="/all-products">
          <button className="btn btn-sm bg-linear-to-r from-purple-500 to-indigo-500 border-none text-white px-6">
            Show All
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default RecentProduct;
