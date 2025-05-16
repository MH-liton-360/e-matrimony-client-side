const Matrimony = ({ matrimony }) => {
    const { profile_image, gender, permanent_division_name, age, occupation } = matrimony;

    return (
        <div className="rounded-2xl shadow-lg bg-white p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <img
                src={profile_image}
                alt={`${gender} profile`}
                className="w-full h-72 rounded-xl mb-4"
            />
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">Gender: {gender}</h2>
                <p className="text-gray-600">Permanent Division: {permanent_division_name}</p>
                <p className="text-gray-600">Age: {age}</p>
                <p className="text-gray-600">Occupation: {occupation}</p>
                <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default Matrimony;
