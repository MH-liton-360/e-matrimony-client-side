import { NavLink, Outlet } from "react-router-dom";
import { Pencil, Eye, Users, Heart, LogOut, ShieldCheck, UserCog, CheckCircle2, Inbox } from "lucide-react";
import { FaHome, FaUserShield } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    return (
        <div className="flex">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="w-64 min-h-screen bg-orange-500 text-white">
                <h2 className="text-2xl font-bold p-4">E-Matrimony</h2>
                <ul className="menu p-4 space-y-2">

                    {/* --- Admin Section --- */}
                    <li className="text-sm font-semibold uppercase text-white/70">Admin</li>
                    <li>
                        <NavLink to='adminDashboard' className="flex items-center gap-2 hover:underline">
                            <FaUserShield size={18} /> Admin Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='manageUsers' className="flex items-center gap-2 hover:underline">
                            <UserCog size={18} /> Manage Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='approvedPremium' className="flex items-center gap-2 hover:underline">
                            <ShieldCheck size={18} /> Approved Premium
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='approvedContacts' className="flex items-center gap-2 hover:underline">
                            <CheckCircle2 size={18} /> Approved Contact Request
                        </NavLink>
                    </li>

                    {/* --- User Routes --- */}
                    <li className="mt-6 text-sm font-semibold uppercase text-white/70">User</li>
                    <li>
                        <NavLink to='/' className="flex items-center gap-2 hover:underline">
                            <FaHome size={18} /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='editBiodata' className="flex items-center gap-2 hover:underline">
                            <Pencil size={18} /> Edit Biodata
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/all' className="flex items-center gap-2 hover:underline">
                            <Eye size={18} /> View Biodata
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='contactRequests' className="flex items-center gap-2 hover:underline">
                            <Users size={18} /> My Contact Request
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='favourites' className="flex items-center gap-2 hover:underline">
                            <Heart size={18} /> Favourites Biodata
                        </NavLink>
                    </li>

                    {/* --- Logout --- */}
                    <li>
                        <NavLink to='logout' className="flex items-center gap-2 hover:underline text-red-200">
                            <LogOut size={18} /> Logout
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
