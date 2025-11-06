import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import ProductCard from '../ProductCard/ProductCard';

const AllProduct = () => {
    const productsData = useLoaderData();
    // console.log(productsData);
    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            {/* Heading */}
            <div className="mb-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight ">
                    <span className="text-gray-900">All </span>
                    <span className="text-purple-600 ">
                        Products
                    </span>
                </h2>
            </div>

            {/* Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {
                    productsData.map(item => <ProductCard key={item._id} singleProduct={item}></ProductCard>)
                }
            </div>
        </section>
    );
};

export default AllProduct;