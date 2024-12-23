import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/Order/OrderFood";
import Login from "../Pages/Login/Login";
import PrivetRoute from "./PrivetRoute";
import Secrit from "../Pages/Shared/Secrit/Secrit";
import Cart from "../Pages/Cart/Cart";
import Dashboard from "../Layout/Dashboard";
import SignUp from "../Pages/SignUp/SignUp";
import AllUsers from "../Layout/AllUsers";
import AddItem from "../Layout/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/ManageItem/ManageItem";
import UpdateItem from "../Pages/UpdateItem/UpdateItem";
import Payment from "../Pages/UpdateItem/Payment/Payment";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Admin home/AdminHome";
import UserHome from "../Pages/UserHome/UserHome";
import About from "../Pages/About/About";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu/>
        },
        {
          path: "order/:category",
          element: <OrderFood/>
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element: <SignUp/>
        },
        {
          path: 'secrit',
          element: <PrivetRoute><Secrit/></PrivetRoute>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivetRoute><Dashboard/></PrivetRoute>,
      children: [
        // Genaral User Routs
        {
          path: '/dashboard/userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart/>
        },
        {
          path: '/dashboard/cart/payment',
          element: <Payment/>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory/>
        },
        // Admin only Routs
        {
          path: '/dashboard/adminHome',
          element: <AdminRoute><AdminHome/></AdminRoute>
        },
        {
          path: 'dashboard/addItem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manageItems', 
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path: '/dashboard/manageItems/dashboard/updateItem/:id',
          element: <AdminRoute><UpdateItem/></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);