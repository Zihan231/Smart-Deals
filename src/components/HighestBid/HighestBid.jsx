import React from "react";

const HighestBid = ({ bids }) => {
    // const [bids, setBids] = useState([]);
    // console.log(productID);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const promise = await fetch(`http://localhost:5000/allBids/${productID}`);
    //             const data = await promise.json();
    //             setBids(data);
    //         }
    //         catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData();
    // }, [productID])

    return (
        <section className="max-w-6xl mx-auto px-4 py-10">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Bids For This Products:{" "}
                <span className="text-purple-600">
                    {bids.length.toString().padStart(2, "0")}
                </span>
            </h2>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
                <table className="table w-full">
                    <thead className="bg-gray-50 text-gray-700 text-sm">
                        <tr>
                            <th className="px-4 py-3 text-left">SL No</th>
                            <th className="px-4 py-3 text-left">Product</th>
                            <th className="px-4 py-3 text-left">Buyer</th>
                            <th className="px-4 py-3 text-left">Bid Price</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bids?.map((bid, idx) => (
                            <tr key={bid?._id} className="hover:bg-gray-50 transition-colors">
                                {/* SL */}
                                <td className="px-4 py-4 text-gray-700 font-medium">
                                    {idx + 1}
                                </td>

                                {/* Product */}
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <img className="w-10 h-10 bg-gray-200 rounded-md" src={bid?.product_image} />
                                        <div>
                                            <p className="font-medium text-gray-800">{bid?.product_name}</p>
                                        </div>
                                    </div>
                                </td>

                                {/* Seller */}
                                <td className="px-4 py-4">
                                    <div className="flex items-center gap-3">
                                        <img className="w-8 h-8 bg-gray-200 rounded-full" src={bid?.buyer_image} />
                                        <div>
                                            <p className="font-medium text-gray-800">{bid?.buyer_name}</p>
                                            <p className="text-sm text-gray-500">
                                                {bid?.sellerEmail}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Bid Price */}
                                <td className="px-4 py-4 text-gray-800 font-semibold">
                                    {bid?.bid_price}
                                </td>

                                {/* Actions */}
                                <td className="px-4 py-4 text-center">
                                    <div className="flex justify-center gap-2">
                                        <button className="btn btn-xs bg-green-100 text-green-700 hover:bg-green-200">
                                            Accept Offer
                                        </button>
                                        <button className="btn btn-xs bg-red-100 text-red-600 hover:bg-red-200">
                                            Reject Offer
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default HighestBid;
