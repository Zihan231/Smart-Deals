import React, { use, useEffect, useRef, useState } from "react";
import { NavLink, useParams } from "react-router";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import HighestBid from "../HighestBid/HighestBid";
import axios from "axios";

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [errors, setErrors] = useState([]);
  const [bids, setBids] = useState([]);

  const { user } = use(AuthContext);


  const { id } = useParams();
  const modalBid = useRef(null);
  const convertDate = (data) => {
    const date = new Date(data);
    const formatted = date.toLocaleDateString("en-GB");
    return formatted;

  }
  const validateBidForm = ({
    buyer_name,
    buyer_email,
    buyer_image,
    bid_price,
    buyer_contact,
  }) => {
    const errs = [];
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Buyer name
    if (!buyer_name?.trim()) errs.push("Buyer name is required.");

    // Buyer email
    if (!buyer_email?.trim()) errs.push("Buyer email is required.");
    else if (!emailRe.test(buyer_email))
      errs.push("Please enter a valid email address.");

    // Buyer image URL (optional but validated if present)
    if (buyer_image && !/^https?:\/\/.+/i.test(buyer_image))
      errs.push("Image URL must be a valid http(s) link.");

    // Bid price
    if (!bid_price?.trim()) errs.push("Offer price is required.");
    else if (isNaN(bid_price) || Number(bid_price) <= 0)
      errs.push("Offer price must be a positive number.");

    // Buyer contact
    if (!buyer_contact?.trim()) errs.push("Contact info is required.");

    return errs;
  };


  const handleSubmit = () => {
    const form = document.getElementById("offerForm");
    const fd = new FormData(form);
    const data = {
      product_id: product?._id,
      buyer_name: fd.get("name"),
      buyer_email: fd.get("email"),
      buyer_image: fd.get("imgUrl"),
      bid_price: fd.get("price"),
      buyer_contact: fd.get("contact"),
      status: "Pending",
      product_name: product?.title,
      product_image: product?.image,
    };
    // console.log(data);

    const errs = validateBidForm(data);
    setErrors(errs);

    if (errs.length === 0) {
      // valid: do your submission later if you want
      fetch('http://localhost:5000/addBid', {
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(async () => {
          const res = await fetch(`http://localhost:5000/allBids/${product?._id}`);
          const updated = await res.json();
          setBids(updated);
          form.reset();
          modalBid.current?.close();
          // console.log(result);
        }).catch(error => {
          console.log(error);
        })
      console.log(data);

    }
  };
  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true)
      try {
        axios.get(`http://localhost:5000/product/${id}`).then(data => {
          setProduct(data.data);
          setIsLoading(false);
        });
      }
      catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    }
    getProduct();

  }, [id]);
  // useEffect(() => {
  //   const getProduct = async () => {
  //     setIsLoading(true)
  //     try {
  //       const promise = await fetch(`http://localhost:5000/product/${id}`);
  //       const data = await promise.json();
  //       setProduct(data);
  //       setIsLoading(false);
  //     }
  //     catch (error) {
  //       console.error("Error fetching product:", error);
  //       setIsLoading(false);
  //     }
  //   }
  //   getProduct();

  // }, [id])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promise = await fetch(`http://localhost:5000/allBids/${product?._id}`);
        const data = await promise.json();
        setBids(data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [product?._id]);

  const handleModalOpen = () => {
    modalBid.current.showModal();
  }
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
          <div className="fixed inset-0 flex items-center justify-center bg-white  z-50">
            <HashLoader
              color="#7c3aed"   // 🌈 same as Tailwind purple-600
              size={70}         // adjust size if needed
              speedMultiplier={1.2}
            />
          </div>
        ) :
          (
            <>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* LEFT COLUMN: image + description */}
                <div className="space-y-6">
                  {/* Image */}
                  <img className="bg-gray-200 rounded-md w-full h-[380px]" src={product?.image} />
                  {/* Description */}
                  <div className="card bg-white border border-gray-200 p-4">
                    <h3 className="text-lg font-semibold mb-3 text-gray-800">
                      Product Description
                    </h3>

                    <div className="flex flex-wrap justify-between text-sm mb-3 gap-2">
                      <p>
                        <span className="text-purple-600 font-medium">Condition:</span>{" "}
                        {product?.condition}
                      </p>
                      <p>
                        <span className="text-purple-600 font-medium">Usage Time:</span>{" "}
                        {product?.usage}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed border-t pt-3">
                      {product?.description}
                    </p>
                  </div>
                </div>

                {/* RIGHT COLUMN: title, meta, cards, button */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {product?.title}
                  </h2>

                  <div>
                    <span className="badge badge-outline text-xs text-purple-600 border-purple-300">
                      {product?.category}
                    </span>
                  </div>

                  <div>
                    <p className="text-green-600 text-lg font-semibold">${product?.price_min} - {product?.price_max}</p>
                    <p className="text-sm text-gray-500">Price starts from</p>
                  </div>

                  {/* Product Details */}
                  <div className="card bg-white border border-gray-200">
                    <div className="card-body p-4">
                      <h3 className="text-sm font-semibold mb-2">Product Details</h3>
                      <p className="text-sm text-gray-600">
                        <strong>Product ID:</strong> {product?._id}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Posted:</strong> {convertDate(product?.created_at)}
                      </p>
                    </div>
                  </div>

                  {/* Seller Info */}
                  <div className="card bg-white border border-gray-200">
                    <div className="card-body p-4">
                      <h3 className="text-sm font-semibold mb-3">Seller Information</h3>

                      <div className="flex items-center gap-3 mb-3">
                        <img className="w-10 h-10 bg-gray-300 rounded-full" src={product?.seller_image} />
                        <div>
                          <p className="font-medium text-gray-800">{product?.seller_name}</p>
                          <p className="text-xs text-gray-500">
                            {product?.email}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600">
                        <strong>Location:</strong> {product?.location}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Contact:</strong> {product?.seller_contact}
                      </p>

                      <p className="text-sm text-gray-600 mt-2">
                        <strong>Status:</strong>{" "}
                        <span className="badge badge-warning badge-sm text-[11px]">
                          {product?.status}
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
                              defaultValue={user?.displayName}
                              readOnly
                              className="input input-bordered w-full"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-600 mb-1">Buyer Email</label>
                            <input
                              defaultValue={user?.email}
                              readOnly
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
                            defaultValue={user?.photoURL}
                            readOnly
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
                              className="btn bg-linear-to-r from-purple-500 to-indigo-500 border-none text-white hover:from-purple-600 hover:to-indigo-600"
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
              <HighestBid bids={bids} />
            </>
          )
      }

    </section>
  );
};

export default ProductDetails;
