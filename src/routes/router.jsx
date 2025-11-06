import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllProduct from "../components/AllProduct/AllProduct";
import MyProducts from "../components/MyProducts/MyProducts";
import MyBids from "../components/MyBids/MyBids";
import CreateProduct from "../components/CreateProduct/CreateProduct";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { HashLoader } from "react-spinners";
import PrivateRoute from "../privateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: async () => {
                    return fetch("http://localhost:5000/recent-Products").then(result => result.json());
                },
                HydrateFallback() {
                    return (
                        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                            <HashLoader color="#7c3aed" size={70} speedMultiplier={1.2} />
                        </div>
                    );
                },
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'all-products',
                Component: AllProduct,
                loader: async () => {
                    const res = await fetch('http://localhost:5000/all-products');
                    return res.json();
                },
                HydrateFallback() {
                    return (
                        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                            <HashLoader color="#7c3aed" size={70} speedMultiplier={1.2} />
                        </div>
                    );
                },
            },
            {
                path: 'my-products',
                Component: MyProducts
            },
            {
                path: 'my-bids/:email',
                element: <PrivateRoute>
                    <MyBids></MyBids>
                </PrivateRoute>
            },
            {
                path: 'create-product',
                Component: CreateProduct
            },
            {
                path: '/products/details/:id',
                Component: ProductDetails
            }
        ]
    }
]);
export default router;