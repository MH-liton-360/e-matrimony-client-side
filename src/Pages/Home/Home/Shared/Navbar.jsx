import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../../../assets/matrimony-logo.jpg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="max-w-7xl mx-auto fixed top-0 left-0 right-0 z-50 bg-amber-50 text-white bg-opacity-80 shadow-md p-4">
            <div className="flex justify-between items-center">
                <div>
                    <img className='h-[70px] w-[110px] rounded-2xl' src={logo} alt="" />
                </div>


                <button onClick={() => setIsOpen(!isOpen)}>
                    <FaBars size={24}
                        className='md:hidden'
                    />
                </button>

                {/* Desktop version */}
                <ul className="hidden md:flex space-x-6 text-gray-700">
                    <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
                    <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
                </ul>
            </div>

            {/* Mobile version */}
            {isOpen && (
                <ul className="flex flex-col mt-4 space-y-2 text-gray-700 md:hidden">
                    <li><Link to="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/services" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link to="/contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
