import React from "react";

const MyBids = () => {
  // dummy data for design only
  const bids = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    product: "Orange Juice",
    price: "$10",
    status: "Pending",
    seller: {
      name: "Sara Chen",
      email: "crafts.by.sara@shop.net",
    },
  }));

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-6">
        My Bids: <span className="text-purple-600">10</span>
      </h2>

      {/* Table */}
      <div className="card bg-white shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-gray-600">
                <th>SL No</th>
                <th>Product</th>
                <th>Seller</th>
                <th>Bid Price</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {bids.map((bid) => (
                <tr key={bid.id} className="hover:bg-gray-50">
                  <td>{bid.id}</td>

                  {/* Product */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-md" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {bid.product}
                        </p>
                        <p className="text-xs text-gray-500">$22.5</p>
                      </div>
                    </div>
                  </td>

                  {/* Seller */}
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {bid.seller.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {bid.seller.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="font-medium">{bid.price}</td>

                  <td>
                    <span className="badge badge-warning badge-sm text-[11px]">
                      {bid.status}
                    </span>
                  </td>

                  <td className="text-right">
                    <button className="btn btn-xs btn-outline btn-error">
                      Remove Bid
                    </button>
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

export default MyBids;
