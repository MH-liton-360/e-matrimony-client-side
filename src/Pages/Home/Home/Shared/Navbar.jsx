import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../../../assets/matrimony-logo.jpg';
import logoProfile from '../../../../assets/white-profile-icon-png-7.png';
import { AuthContext } from '../../../../Provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

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
                    <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
                    <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
                    <li><Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link></li>
                </ul>

                {/* Right side: bars, profile, login */}
                <div className="flex items-center space-x-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-800">
                        <FaBars size={24} />
                    </button>
                    {
                        user && user?.email ? (
                            <>
                                <div>
                                    <img className="w-12 h-11 rounded-2xl" src={user.photoURL} alt="User Profile" />
                                    {/* <p>{user.displayName}</p> */}
                                </div>
                                <button
                                    onClick={logOut}
                                    className="w-full sm:w-auto bg-emerald-900 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-medium"
                                >
                                    Logout
                                </button>
                            </>
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
                        <li><Link to="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li><Link to="/services" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link></li>
                        <li><Link to="/dashboard" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
                    </ul>
                )
            }
        </nav >
    );
};

export default Navbar;
