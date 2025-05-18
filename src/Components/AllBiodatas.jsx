import { useEffect, useState } from 'react';
import axios from 'axios';

const AllBiodatas = () => {
    const [biodatas, setBiodatas] = useState([]);

    useEffect(() => {
        const fetchBiodatas = async () => {
            try {
                const res = await axios.get('https://e-matrimony-server-side.vercel.app/biodataCreatedCard');
                setBiodatas(res.data);
                console.log("Fetched biodatas:", res.data);
            } catch (err) {
                console.error("Error fetching biodatas:", err);
            }
        };

        fetchBiodatas();
    }, []);

    return (
        <div className="mt-24">
            <div className="px-4 py-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {biodatas.map((bio) => (
                        <div key={bio._id} className="border p-4 rounded-lg shadow bg-white hover:shadow-lg transition duration-300">
                            <img
                                src={bio.image}
                                alt="Profile"
                                className="h-40 w-40 object-cover mx-auto rounded-full"
                            />
                            <h3 className="text-xl font-bold text-center mt-4">{bio.type}</h3>
                            <div className="mt-2 space-y-1 text-sm text-gray-700">
                                <p><strong>Age:</strong> {bio.age}</p>
                                <p><strong>Height:</strong> {bio.height}</p>
                                <p><strong>Marital Status:</strong> {bio.maritalStatus}</p>
                                <p><strong>Division:</strong> {bio.division}</p>
                                <p><strong>Occupation:</strong> {bio.occupation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllBiodatas;
