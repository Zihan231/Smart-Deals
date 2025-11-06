import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const MyBids = () => {
  const { user } = use(AuthContext);
  const { email } = useParams();
  const [bids, setBids] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const handleDeleteBids = (bid_id, e) => {
    e.preventDefault;
    fetch(`http://localhost:5000/bids/delete/${bid_id}`, {
      method: 'DELETE',
    })
      .then(result => {
        if (result.ok) {
          setBids(bids.filter(item => item.bid_id != bid_id))
        }
        console.log(result);
      }).catch(error => {
        console.log(error);
    })
  }
  // console.log(user);
  useEffect(() => {

    setIsLoading(true);
    const loadData = async () => {
      if (!user || !email) return;    
      try {
        const Token = await user?.accessToken;
        const promise = await fetch(`http://localhost:5000/myBids/${email}`, {
          headers: {
            authorization: `Bearer ${Token}`
          } 
        });
        const bidsData = await promise.json();

        const combineData = await Promise.all(
          bidsData.map(async (item) => {
            const nextPromise = await fetch(`http://localhost:5000/product/${item.product_id}`);
            const product = await nextPromise.json();
            return {
              bid_id: item._id,
              product_name: product?.title,
              product_URL: product?.image,
              seller_image: product?.seller_image,
              seller_name: product?.seller_name,
              bid_price: item?.bid_price,
              status: item?.status,
            };
          })
        );
        setBids(combineData);
      }
      catch (error) {
        setIsLoading(false);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (email) loadData();

  }, [email,user]);
  // console.log(BidInfo);
  return (
    <>
      {
        IsLoading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-white  z-50">
            <HashLoader
              color="#7c3aed"   // 🌈 same as Tailwind purple-600
              size={70}         // adjust size if needed
              speedMultiplier={1.2}
            />
          </div>
        ) :
          (
            <section className="max-w-6xl mx-auto px-4 py-10 min-h-[80vh]">
              {/* Heading */}
              <h2 className="text-3xl font-bold text-center mb-6">
                My Bids: <span className="text-purple-600">{ bids?.length }</span>
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
                      {bids.map((bid, index) => (
                        <tr key={bid.bid_id} className="hover:bg-gray-50">
                          <td>{index + 1}</td>

                          {/* Product */}
                          <td>
                            <div className="flex items-center gap-3">
                              <img className="w-10 h-10 bg-gray-200 rounded-md" src={bid.product_URL} />
                              <div>
                                <p className="font-medium text-gray-800">
                                  {bid.product}
                                </p>
                                <p className="text-xs text-gray-500">{bid.product_name}</p>
                              </div>
                            </div>
                          </td>

                          {/* Seller */}
                          <td>
                            <div className="flex items-center gap-3">
                              <img className="w-8 h-8 bg-gray-300 rounded-full" src={bid.seller_image} />
                              <p className="text-xs text-gray-500">{bid.seller_name}</p>

                              <div>
                                <p className="font-medium text-gray-800">
                                  {bid.buyer_name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {bid.buyer_name}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="font-medium">{bid.bid_price}</td>

                          <td>
                            <span className="badge badge-warning badge-sm text-[11px]">
                              {bid.status}
                            </span>
                          </td>

                          <td className="text-right">
                            <button onClick={(e)=>handleDeleteBids(bid?.bid_id, e)} className="btn btn-xs btn-outline btn-error">
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
          )
      }

    </>

  );
};

export default MyBids;
