import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Register/Login";
import SignUp from "../Pages/Register/SignUp";


export const router = createBrowserRouter([
    {
            path: "/",
            element: <MainLayout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/contact",
                    element: <Contact/>
                },
                {
                    path: "/login",
                    element: <Login/>
                },
                {
                    path: "/signup",
                    element: <SignUp/>
                }
                
            ]
    }
])