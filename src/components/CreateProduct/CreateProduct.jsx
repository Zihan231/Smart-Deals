import React, { useState } from "react";
import { NavLink } from "react-router"; // per your preference
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CreateProduct = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  console.log(user);
  // --- helpers ---
  function isValidURL(value) {
    try {
      const u = new URL(value);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  }

  function isValidPhone(phone) {
    // simple intl-friendly check: digits, spaces, +, -, ()
    return /^[+\d][\d\s\-()]{5,}$/.test(phone.trim());
  }
  // --- new helpers (add these above validateProduct) ---
  function normalizeCondition(val) {
    const v = String(val || "").toLowerCase();
    if (v.includes("brand")) return "fresh";
    if (v.includes("used")) return "used";
    return v || "used";
  }

  function deriveUsage(condition, usageTime) {
    // if brand new and no usage given, mark as Unused
    if (normalizeCondition(condition) === "fresh" && !usageTime) return "Unused";
    return usageTime || null;
  }

  // --- replace your validateProduct with this version ---
  function validateProduct(fd) {
    const errors = [];

    const title = (fd.get("title") || "").trim();
    const category = (fd.get("category") || "").trim();
    const minPriceRaw = (fd.get("minPrice") || "").trim();
    const maxPriceRaw = (fd.get("maxPrice") || "").trim();
    const condition = fd.get("condition") || "";
    const usageTime = (fd.get("usageTime") || "").trim();
    const productImg = (fd.get("productImg") || "").trim();
    const sellerName = (fd.get("sellerName") || "").trim();
    const sellerEmail = (fd.get("sellerEmail") || "").trim();
    const sellerContact = (fd.get("sellerContact") || "").trim();
    const sellerImg = (fd.get("sellerImg") || "").trim();
    const location = (fd.get("location") || "").trim();
    const description = (fd.get("description") || "").trim();

    // Title
    if (!title) errors.push("Title is required.");
    else if (title.length < 5) errors.push("Title should be at least 5 characters.");

    // Category
    if (!category) errors.push("Please select a category.");

    // Prices
    const priceMin = Number(minPriceRaw);
    const priceMax = maxPriceRaw ? Number(maxPriceRaw) : null;

    if (!minPriceRaw) errors.push("Min Price is required.");
    else if (Number.isNaN(priceMin) || priceMin <= 0)
      errors.push("Min Price must be a positive number.");

    if (maxPriceRaw && (Number.isNaN(priceMax) || priceMax <= 0)) {
      errors.push("Max Price must be a positive number when provided.");
    }
    if (!Number.isNaN(priceMin) && priceMax !== null && priceMax < priceMin) {
      errors.push("Max Price cannot be less than Min Price.");
    }

    // Condition + usage time
    if (!condition) errors.push("Please choose a product condition.");
    if (String(condition).toLowerCase().includes("used") && !usageTime) {
      errors.push("Usage time is required for used products.");
    }

    // Images
    if (!productImg) errors.push("Product Image URL is required.");
    else if (!isValidURL(productImg)) errors.push("Product Image URL must be valid (http/https).");

    if (sellerImg && !isValidURL(sellerImg)) {
      errors.push("Seller Image URL must be valid (http/https).");
    }

    // Seller info
    if (!sellerName) errors.push("Seller name is required.");
    if (!sellerEmail) errors.push("Seller email is required.");
    else if (!isValidEmail(sellerEmail)) errors.push("Seller email looks invalid.");

    if (sellerContact && !isValidPhone(sellerContact)) {
      errors.push("Seller contact looks invalid. Use digits, +, -, spaces, or parentheses.");
    }

    // Location & description
    if (!location) errors.push("Location is required.");
    if (!description) errors.push("Product description is required.");
    else if (description.length < 20) errors.push("Description should be at least 20 characters.");

    // Build backend-shaped data
    const data = {
      // _id: (let backend generate)
      title,
      price_min: Number.isNaN(priceMin) ? null : priceMin,
      price_max: priceMax,
      email: sellerEmail,
      category,
      created_at: new Date().toISOString(),     // or keep your server timestamp
      image: productImg,
      status: "active",                          // you can change to "sold" when needed
      location,
      seller_image: sellerImg || null,
      seller_name: sellerName,
      condition: normalizeCondition(condition),  // "fresh" | "used"
      usage: deriveUsage(condition, usageTime),  // e.g., "Unused" or "1 year 3 month"
      description,
      seller_contact: sellerContact || null,
    };

    return {
      ok: errors.length === 0,
      errors,
      data,
    };
  }


  // --- inner form component (now actually rendered) ---
  const CreateProductForm = () => {
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const fd = new FormData(form);
      const result = validateProduct(fd);

      if (!result.ok) {
        setErrors(result.errors);
        return;
      }

      setErrors([]);
      // 🔐 Your data post goes here:
      // await fetch('/api/products', { method: 'POST', body: JSON.stringify(result.data), headers: { 'Content-Type':'application/json' } })
      // .then(...) .catch(...)
      axiosInstance.post("/create/product", result.data)
        .then(dt => {
          if (dt.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            form.reset();
            // console.log("Inserted Successful");
          }
        })
      // console.log("Ready to POST:", result.data);
    };

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
              {/* Error box */}
              {errors.length > 0 && (
                <div className="alert alert-error mb-4">
                  <span className="font-semibold">Please fix the following:</span>
                  <ul className="list-disc list-inside">
                    {errors.map((msg, i) => (
                      <li key={i}>{msg}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Form */}
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                {/* Title */}
                <div className="md:col-span-1">
                  <label className="label">
                    <span className="label-text text-gray-700">Title</span>
                  </label>
                  <input
                    name="title"
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
                  <select name="category" className="select select-bordered w-full" defaultValue="">
                    <option value="">Select a Category</option>
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
                    name="minPrice"
                    type="number"
                    step="0.01"
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
                    name="maxPrice"
                    type="number"
                    step="0.01"
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
                      <input type="radio" name="condition" value="Brand New" className="radio radio-primary" defaultChecked />
                      <span>Brand New</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="condition" value="Used" className="radio" />
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
                    name="usageTime"
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
                    name="productImg"
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
                    defaultValue={user?.displayName}
                    readOnly
                    name="sellerName"
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
                    defaultValue={user?.email}
                    readOnly
                    name="sellerEmail"
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
                    name="sellerContact"
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
                    defaultValue={user?.photoURL}
                    readOnly
                    name="sellerImg"
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
                    name="location"
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
                    name="description"
                    className="textarea textarea-bordered w-full min-h-[110px]"
                    placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time..."
                  />
                </div>

                {/* Submit (full width) */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="btn w-full bg-linear-to-r from-purple-500 to-indigo-500 border-none text-white"
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

  // IMPORTANT: actually render the form component
  return <CreateProductForm />;
};

export default CreateProduct;
