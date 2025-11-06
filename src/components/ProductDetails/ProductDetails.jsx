import React, { useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router";
import { HashLoader } from "react-spinners";

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [errors, setErrors] = useState([]);

  const { id } = useParams();
  const modalBid = useRef(null);
  const convertDate = (data) => {
    const date = new Date(data);
    const formatted = date.toLocaleDateString("en-GB");
    return formatted;

  }
  const validateBidForm = ({ name, email, imgUrl, price, contact }) => {
    const errs = [];
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name?.trim()) errs.push("Buyer name is required.");
    if (!email?.trim()) errs.push("Buyer email is required.");
    else if (!emailRe.test(email)) errs.push("Please enter a valid email address.");

    if (imgUrl && !/^https?:\/\/.+/i.test(imgUrl)) errs.push("Image URL must be a valid http(s) link.");

    if (!price?.trim()) errs.push("Offer price is required.");
    else if (isNaN(price) || Number(price) <= 0) errs.push("Offer price must be a positive number.");

    if (!contact?.trim()) errs.push("Contact info is required.");

    return errs;
  };

  const handleSubmit = () => {
    const form = document.getElementById("offerForm");
    const fd = new FormData(form);
    const data = {
      name: fd.get("name"),
      email: fd.get("email"),
      imgUrl: fd.get("imgUrl"),
      price: fd.get("price"),
      contact: fd.get("contact"),
    };

    const errs = validateBidForm(data);
    setErrors(errs);

    if (errs.length === 0) {
      // valid: do your submission later if you want
      form.reset();
      modalBid.current?.close();
    }
  };



  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true)
      try {
        const promise = await fetch(`http://localhost:5000/product/${id}`);
        const data = await promise.json();
        setProduct(data);
        setIsLoading(false);
      }
      catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    }
    getProduct();

  }, [id])
  const handleModalOpen = () => {
    modalBid.current.showModal();
  }
  console.log(product?.condition);
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
      {
        isLoading ? (
          <HashLoader />
        ) :
          (
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* LEFT COLUMN: image + description */}
              <div className="space-y-6">
                {/* Image */}
                <img className="bg-gray-200 rounded-md w-full h-[380px]" src={product.image} />
                {/* Description */}
                <div className="card bg-white border border-gray-200 p-4">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Product Description
                  </h3>

                  <div className="flex flex-wrap justify-between text-sm mb-3 gap-2">
                    <p>
                      <span className="text-purple-600 font-medium">Condition:</span>{" "}
                      {product.condition}
                    </p>
                    <p>
                      <span className="text-purple-600 font-medium">Usage Time:</span>{" "}
                      {product.usage}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed border-t pt-3">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: title, meta, cards, button */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  {product.title}
                </h2>

                <div>
                  <span className="badge badge-outline text-xs text-purple-600 border-purple-300">
                    {product.category}
                  </span>
                </div>

                <div>
                  <p className="text-green-600 text-lg font-semibold">${product.price_min} - {product.price_max}</p>
                  <p className="text-sm text-gray-500">Price starts from</p>
                </div>

                {/* Product Details */}
                <div className="card bg-white border border-gray-200">
                  <div className="card-body p-4">
                    <h3 className="text-sm font-semibold mb-2">Product Details</h3>
                    <p className="text-sm text-gray-600">
                      <strong>Product ID:</strong> {product._id}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Posted:</strong> {convertDate(product.created_at)}
                    </p>
                  </div>
                </div>

                {/* Seller Info */}
                <div className="card bg-white border border-gray-200">
                  <div className="card-body p-4">
                    <h3 className="text-sm font-semibold mb-3">Seller Information</h3>

                    <div className="flex items-center gap-3 mb-3">
                      <img className="w-10 h-10 bg-gray-300 rounded-full" src={product.seller_image} />
                      <div>
                        <p className="font-medium text-gray-800">{product.seller_name}</p>
                        <p className="text-xs text-gray-500">
                          {product.email}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600">
                      <strong>Location:</strong> {product.location}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Contact:</strong> {product.seller_contact}
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Status:</strong>{" "}
                      <span className="badge badge-warning badge-sm text-[11px]">
                        {product.status}
                      </span>
                    </p>
                  </div>
                </div>
                {/* CTA */}
                <button onClick={handleModalOpen} className="btn w-full bg-linear-to-r from-purple-500 to-indigo-500 border-none text-white hover:from-purple-600 hover:to-indigo-600">
                  I Want Buy This Product
                </button>
                {/* Open with: document.getElementById('offer_modal').showModal() */}
                <dialog ref={modalBid} className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box max-w-2xl rounded-xl shadow-xl">
                    <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
                      Give Seller Your Offered Price
                    </h3>

                    {/* 🔴 Error Box (shows only when there are errors) */}
                    {errors.length > 0 && (
                      <div className="alert alert-error mb-4">
                        <span className="text-sm">
                          <ul className="list-disc list-inside space-y-1">
                            {errors.map((er, i) => (
                              <li key={i}>{er}</li>
                            ))}
                          </ul>
                        </span>
                      </div>
                    )}

                    {/* Form (design-only) */}
                    <form id="offerForm" className="space-y-4">
                      {/* Name + Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Buyer Name</label>
                          <input
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-600 mb-1">Buyer Email</label>
                          <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                          />
                        </div>
                      </div>

                      {/* Image URL */}
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Buyer Image URL</label>
                        <input
                          name="imgUrl"
                          type="url"
                          placeholder="https://...your_img_url"
                          className="input input-bordered w-full"
                        />
                      </div>

                      {/* Offer Price */}
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Place your Price</label>
                        <input
                          name="price"
                          type="text"
                          placeholder="e.g. 25.00"
                          className="input input-bordered w-full"
                        />
                      </div>

                      {/* Contact */}
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">Contact Info</label>
                        <input
                          name="contact"
                          type="text"
                          placeholder="e.g. +1-555-1234"
                          className="input input-bordered w-full"
                        />
                      </div>

                      {/* Actions */}
                      <div className="modal-action mt-6">
                        <form method="dialog" className="flex items-center gap-3">
                          <button className="btn btn-outline border-purple-400 text-purple-600 hover:bg-purple-50">
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={handleSubmit}
                            className="btn bg-gradient-to-r from-purple-500 to-indigo-500 border-none text-white hover:from-purple-600 hover:to-indigo-600"
                          >
                            Submit Bid
                          </button>
                        </form>
                      </div>
                    </form>
                  </div>

                  {/* Backdrop (clicking outside closes the modal) */}
                  <form method="dialog" className="modal-backdrop">
                    <button className="cursor-default bg-black/50" aria-label="Close" />
                  </form>
                </dialog>


              </div>
            </div>
          )
      }

    </section>
  );
};

export default ProductDetails;
