import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import MatrimonyDetails from "../Pages/Home/Matrimony/MatrimonyDetails";
import Authentication from "../Layouts/Authentication";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import CreateBiodatas from "../Components/CreateBiodatas";
import AllBiodatas from "../Components/AllBiodatas";
import Dashboard from "../Layouts/Dashboard";
import Error from "../Pages/Home/Home/Shared/Error";
import DashboardHome from "../Components/Dashboard/DashboardHome";
import Editbiodata from "../Components/Dashboard/Editbiodata";
import AdminDSB from "../Components/Dashboard/AdminDSB";


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
        ]
    },

    //Authentication
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


    //Dashboard
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'dashboard',
                element: <DashboardHome></DashboardHome>,
            },
            {
                path: 'editBiodata',
                element: <Editbiodata></Editbiodata>,
            },
            {
                path: 'adminDashboard',
                element: <AdminDSB></AdminDSB>,
            }

        ]
    },

    {
        path: "*",
        element: <Error></Error>
    }
]);