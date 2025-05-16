import { useLoaderData, useParams } from "react-router-dom";

const MatrimonyDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();

    const matrimony = data.find(matrimony => matrimony.id.toString() === id);
    const { profile_image, gender, permanent_division_name, age, occupation, religion, education, height, working_status, company, marital_status, country, summary } = matrimony;

    return (
        <div className="p-30">
            <div className="rounded-2xl shadow-lg bg-white p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <img
                    src={profile_image}
                    alt={`${gender} profile`}
                    className="w-full h-full rounded-xl mb-4"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    <h2 className="text-xl font-semibold text-gray-800 col-span-2">Gender: {gender}</h2>

                    <p className="text-gray-600"><strong>Permanent Division:</strong> {permanent_division_name}</p>
                    <p className="text-gray-600"><strong>Country:</strong> {country}</p>

                    <p className="text-gray-600"><strong>Age:</strong> {age}</p>
                    <p className="text-gray-600"><strong>Occupation:</strong> {occupation}</p>

                    <p className="text-gray-600"><strong>Religion:</strong> {religion}</p>
                    <p className="text-gray-600"><strong>Education:</strong> {education}</p>

                    <p className="text-gray-600"><strong>Height:</strong> {height}</p>
                    <p className="text-gray-600"><strong>Working Status:</strong> {working_status}</p>

                    <p className="text-gray-600"><strong>Company:</strong> {company}</p>
                    <p className="text-gray-600"><strong>Marital Status:</strong> {marital_status}</p>

                    <p className="text-gray-600 col-span-2"><strong>Summary:</strong> {summary}</p>


                    <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium transition-colors col-span-2">
                        Add Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MatrimonyDetails;