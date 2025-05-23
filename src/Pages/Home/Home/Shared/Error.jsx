import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
            <p className="text-gray-600 mb-6">
                The page you're looking for doesn't exist or has been moved.
            </p>

            <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
            >
                Go to Home
            </Link>

        </div>
    );
};

export default Error;
