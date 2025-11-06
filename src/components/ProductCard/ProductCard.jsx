import React from 'react';
import { NavLink } from 'react-router';

const ProductCard = ({singleProduct}) => {
    return (
        <>
            {/* Card */}
            <div className="card bg-white shadow-sm border border-gray-200">
                <div className="p-4">
                    
                    <img  className="w-full h-44 rounded-md bg-gray-200 content-cover" src={singleProduct.image} alt=""/>
                </div>
                <div className="card-body pt-0">
                    <h3 className="text-sm font-medium text-gray-800">
                        {
                            singleProduct.title
                        }
                    </h3>
                    <p className="text-xs text-purple-600 font-semibold mt-1">
                        $ {singleProduct.price_min} - { singleProduct.price_max }
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
        </>
    );
};

export default ProductCard;