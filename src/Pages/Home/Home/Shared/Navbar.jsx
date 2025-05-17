import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../../../assets/matrimony-logo.jpg';
import logoProfile from '../../../../assets/white-profile-icon-png-7.png';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);


    const profileMenuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
                setShowProfileMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <nav className="max-w-7xl mx-auto fixed top-0 left-0 right-0 z-50 bg-amber-50 bg-opacity-80 shadow-md p-4">

            <div className="flex justify-between items-center relative">
                {/* Logo */}
                <div>
                    <img className="h-[70px] w-[110px] rounded-2xl" src={logo} alt="Logo" />
                </div>

                {/* Centered Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-gray-700 absolute left-1/2 transform -translate-x-1/2">
                    <li><Link to="/" className="hover:text-blue-500">Home</Link></li>

                    <li className="relative group">
                        <button className="hover:text-blue-500">Biodatas</button>
                        <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-10">
                            <li><Link to="/create" className="block px-4 py-2 hover:bg-gray-100">Create Biodatas</Link></li>
                            <li><Link to="/all" className="block px-4 py-2 hover:bg-gray-100">All Biodatas</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>

                    <li className="relative group">
                        <button className="hover:text-blue-500">Dashboard</button>
                        <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-10">
                            <li><Link to="/dashboard/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link></li>
                            <li><Link to="/dashboard/edit" className="block px-4 py-2 hover:bg-gray-100">Edit Biodata</Link></li>
                            <li><Link to="/dashboard/view" className="block px-4 py-2 hover:bg-gray-100">View Biodata</Link></li>
                            <li><Link to="/dashboard/contacts" className="block px-4 py-2 hover:bg-gray-100">My Contact Requests</Link></li>
                            <li><Link to="/dashboard/favourites" className="block px-4 py-2 hover:bg-gray-100">Favourites Biodata</Link></li>
                            <li><Link to="/logout" className="block px-4 py-2 hover:bg-gray-100 text-red-600">Logout</Link></li>
                        </ul>
                    </li>
                </ul>

                {/* Right side: bars, profile, login */}
                <div className="flex items-center space-x-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-800">
                        <FaBars size={24} />
                    </button>

                    {user && user?.email ? (
                        <div className="relative" ref={profileMenuRef}>
                            <img
                                onClick={() => setShowProfileMenu(!showProfileMenu)}
                                className="w-12 h-11 rounded-2xl cursor-pointer"
                                src={user.photoURL}
                                alt="User Profile"
                            />
                            {showProfileMenu && (
                                <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-20">
                                    <li>
                                        <Link to="/dashboard/view" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setShowProfileMenu(false)}>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/dashboard" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setShowProfileMenu(false)}>
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                setShowProfileMenu(false);
                                                logOut();
                                            }}
                                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <>
                            <img className="h-[50px]" src={logoProfile} alt="Default Profile" />
                            <Link
                                to="/auth/login"
                                className="w-full sm:w-auto bg-emerald-900 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-medium"
                            >
                                Login
                            </Link>
                        </>
                    )
                    }

                </div>
            </div>

            {
                isOpen && (
                    <ul className="flex flex-col mt-4 space-y-2 text-gray-700 md:hidden">
                        <li><Link to="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link></li>

                        {/* Biodatas with sub-links */}
                        <li>
                            <span className="font-medium">Biodatas</span>
                            <ul className="ml-4 space-y-1">
                                <li><Link to="/create" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Create Biodatas</Link></li>
                                <li><Link to="/all" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>All Biodatas</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/services" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link></li>
                        <li><Link to="/dashboard/dashboard" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
                    </ul>
                )
            }
        </nav >
    );
};

export default Navbar;
