import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const MatrimonyDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();

    const matrimony = data.find(matrimony => matrimony.id.toString() === id);
    const { profile_image, gender, permanent_division_name, age, occupation, religion, education, height, working_status, company, marital_status, country, summary } = matrimony;

    return (
        <div>
            <Helmet>
                <title> Details</title>
            </Helmet>
            <div className="pt-30 px-4 py-6 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <img
                        src={profile_image}
                        alt={`${gender} profile`}
                        className="w-full h-full rounded-xl mb-6"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm sm:text-base">
                        <h2 className="text-2xl font-semibold text-gray-800 col-span-2">
                            Gender: {gender}
                        </h2>

                        <p className="text-gray-700">
                            <strong>Permanent Division:</strong> {permanent_division_name}
                        </p>
                        <p className="text-gray-700">
                            <strong>Country:</strong> {country}
                        </p>

                        <p className="text-gray-700">
                            <strong>Age:</strong> {age}
                        </p>
                        <p className="text-gray-700">
                            <strong>Occupation:</strong> {occupation}
                        </p>

                        <p className="text-gray-700">
                            <strong>Religion:</strong> {religion}
                        </p>
                        <p className="text-gray-700">
                            <strong>Education:</strong> {education}
                        </p>

                        <p className="text-gray-700">
                            <strong>Height:</strong> {height}
                        </p>
                        <p className="text-gray-700">
                            <strong>Working Status:</strong> {working_status}
                        </p>

                        <p className="text-gray-700">
                            <strong>Company:</strong> {company}
                        </p>
                        <p className="text-gray-700">
                            <strong>Marital Status:</strong> {marital_status}
                        </p>

                        <p className="text-gray-700 col-span-2">
                            <strong>Summary:</strong> {summary}
                        </p>

                        <button className="mt-6 col-span-2 w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-medium transition duration-200">
                            Add Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatrimonyDetails;