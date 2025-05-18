import { Helmet } from "react-helmet-async";

const CreateBiodatas = () => {
    return (
        <div className="mt-30 mb-8">
            <Helmet>
                <title>Create Biodata</title>
            </Helmet>
            <form className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4">
                <h1 className="text-center font-bold text-3xl bg-blue-100">Marital Biodatas Information</h1>

                <div>
                    <label className="block mb-1 font-medium">Biodata ID</label>
                    <input type="number" name="val" min="0" className="w-full p-2 border rounded-md" required />

                </div>

                <div>
                    <label className="block mb-1 font-medium">Gender</label>
                    <select name="gender" className="w-full p-2 border rounded-md">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Profile Image URL</label>
                    <input
                        type="url"
                        name="profileImage"
                        placeholder="https://example.com/image.jpg"
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Permanent Division</label>
                    <select name="permanentDivision" className="w-full p-2 border rounded-md">
                        <option>Dhaka</option>
                        <option>Chattagram</option>
                        <option>Rangpur</option>
                        <option>Barisal</option>
                        <option>Khulna</option>
                        <option>Mymensingh</option>
                        <option>Sylhet</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Age</label>
                    <input type="number" name="age" min="0" className="w-full p-2 border rounded-md" required />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Height (in cm)</label>
                    <input type="number" name="height" min="50" className="w-full p-2 border rounded-md" required />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Marital Status</label>
                    <select name="marital_status" className="w-full p-2 border rounded-md">
                        <option>Married</option>
                        <option>Unmarried</option>
                        <option>Divorced</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Occupation</label>
                    <input type="text" name="occupation" className="w-full p-2 border rounded-md" required />
                </div>

                <div className="text-center">
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateBiodatas;
