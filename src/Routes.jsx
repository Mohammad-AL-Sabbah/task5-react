import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./Layout/MainLayOut";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/Error/ErrorPage";
import Login from "./Pages/LogIn/Login";
import Register from "./Pages/Register/Register";
import VerifyBassword from "./Pages/VerifyBassword/VerifyBassword";
import ResetBassword from "./Pages/ResetBassword/Reset";

const routes = createBrowserRouter([
    {
    path: '/',
    element:<MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/shop',
            element: <Shop />
        },
        {
            path: '/cart',
            element: 
            
            <Cart />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/reset-password',
            element: <ResetBassword />
        },
        {
            path: '/verify-code',
            element: <VerifyBassword />
        }

    ]

}

])
export default routes;