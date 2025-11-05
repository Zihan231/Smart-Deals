import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllProduct from "../components/AllProduct/AllProduct";
import MyProducts from "../components/MyProducts/MyProducts";
import MyBids from "../components/MyBids/MyBids";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
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
            }
        ]
    }
]);
export default router;