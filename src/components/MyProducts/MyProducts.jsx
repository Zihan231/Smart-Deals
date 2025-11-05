import React from "react";

const MyProducts = () => {
  // dummy rows just for layout/visuals
  const rows = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: "Orange Juice",
    category: "Beverage",
    price: "$100",
    status: "Pending",
  }));

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">
        My Products: <span className="text-purple-600">10</span>
      </h2>

      {/* Table Card */}
      <div className="card bg-white shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-gray-600">
                <th>SL No</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50">
                  <td className="w-16">{r.id}</td>

                  {/* image placeholder */}
                  <td className="w-24">
                    <div className="h-8 w-12 rounded bg-gray-200" />
                  </td>

                  <td className="min-w-[180px]">{r.name}</td>
                  <td>{r.category}</td>
                  <td className="font-medium">{r.price}</td>

                  <td>
                    <span className="badge badge-warning badge-sm text-[11px]">
                      {r.status}
                    </span>
                  </td>

                  <td className="text-right">
                    <div className="flex justify-end gap-2">
                      <button className="btn btn-xs btn-outline btn-info">
                        Edit
                      </button>
                      <button className="btn btn-xs btn-outline btn-error">
                        Delete
                      </button>
                      <button className="btn btn-xs btn-outline btn-success">
                        Make Sold
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyProducts;
