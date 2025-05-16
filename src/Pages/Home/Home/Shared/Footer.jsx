import { FaLinkedin, FaTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#e3ecf2] text-gray-700">
            <div className="bg-[#f71e7b] text-white text-center py-3 px-4 rounded-b-lg">
                <p className="text-lg font-semibold">
                    Free support: +880 1898-9150..    |    Email: liton72524nkgmail.com
                </p>
            </div>


            <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-3">GET IN TOUCH</h3>
                    <p className="mb-2">Address: Dhaka,Bangladesh</p>
                    <p className="mb-2">Phone: +880 1898-9150..</p>
                    <p>Email: liton72524nkgmail.com</p>
                </div>



                <div>
                    <h3 className="font-bold text-lg mb-3">HELP & SUPPORT</h3>
                    <div>
                        <p><a href="#" className="hover:text-blue-500">BD Matrimony</a></p>
                        <p><a href="#" className="hover:text-blue-500">Contact us</a></p>
                        <p><a href="#" className="hover:text-blue-500">Feedback</a></p>
                        <p><a href="#" className="hover:text-blue-500">FAQs</a></p>
                    </div>
                </div>



                <div>
                    <h3 className="font-bold text-lg mb-3">SOCIAL MEDIA</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/MH.liton.360"><FaFacebookF className="text-[#3b5998] text-xl" /></a>
                        <a href="https://www.youtube.com/watch?v=kml52nRtX2M "><FaYoutube className="text-[#ff0000] text-xl" /></a>
                        <a href="#"><FaLinkedin className="text-[#0077b5] text-xl" /></a>
                        <a href="#"><FaTwitter className="text-[#1da1f2] text-xl" /></a>
                    </div>
                </div>
            </div>



            <div className="text-center py-4 border-t border-gray-300 px-4">
                <p className="mb-2">
                    BD Matrimony - Trusted by over thousands of Boys & Girls for successful marriage.
                    <button className="ml-3 bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700">
                        Join us today !
                    </button>
                </p>
                <p className="text-sm mt-2">
                    Copyright © 2025 All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
