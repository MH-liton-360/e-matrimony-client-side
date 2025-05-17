import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import MatrimonyDetails from "../Pages/Home/Matrimony/MatrimonyDetails";
import Authentication from "../Layouts/Authentication";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Components/Dashboard/Dashboard";
import CreateBiodatas from "../Components/CreateBiodatas";
import AllBiodatas from "../Components/AllBiodatas";

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
                path: 'matrimony/:id',
                element: (
                    <PrivateRoute>
                        <MatrimonyDetails></MatrimonyDetails>,
                    </PrivateRoute>
                ),
                loader: () => fetch('/Matrimony.json'),
                errorElement: <Error />,

            },

            // Biodatas Route setup 
            {
                path: 'create',
                element: <CreateBiodatas></CreateBiodatas>,
            },
            {
                path: 'all',
                element: <AllBiodatas></AllBiodatas>,
            },
            {
                path: 'dashboard/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: 'dashboard/dashboard',
                        element: <Dashboard></Dashboard>,
                    }
                ]
            }
        ]
    },
    {
        path: 'auth',
        element: <Authentication></Authentication>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: 'register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
]);