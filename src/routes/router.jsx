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
                Component: AllProduct
            },
            {
                path: 'my-products',
                Component: MyProducts
            },
            {
                path: 'my-bids',
                Component: MyBids
            },
            {
                path: 'create-product',
                Component: CreateProduct
            },
            {
                path: '/details',
                Component: ProductDetails
            }
        ]
    }
]);
export default router;