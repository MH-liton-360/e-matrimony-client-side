import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);

        const name = form.get("name");
        if (name.length < 5) {
            setError({ ...error, name: "must be more then five characters long" });
            return;
        }
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        //console.log({ name, photo, email, password });

        createNewUser(email, password)
            .then((res) => {
                const user = res.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="mt-16 lg:p-10">
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Register Your Account!
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your full name"
                            />
                            {
                                error.name && (
                                    <label className="label text-sm text-red-500">
                                        {error.name}
                                    </label>
                                )
                            }
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Photo URL
                            </label>
                            <input
                                type="url"
                                name="photo"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Link to your profile photo"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Create a strong password"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <a href="#" className="text-blue-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                        >
                            Register
                        </button>
                    </form>

                    <p className="text-center font-semibold">Already Have An Account ? <Link to="/auth/login" className="text-red-500">Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
