import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Editbiodata = () => {
    const [email, setEmail] = useState('');
    const [formData, setFormData] = useState({});
    const [statusMessage, setStatusMessage] = useState('');
    const [biodataId, setBiodataId] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            if (value) {
                dataToSend.append(key, value);
            }
        });

        dataToSend.append('email', email);

        try {
            const res = await fetch('/api/biodata', {
                method: 'POST',
                body: dataToSend
            });

            const result = await res.json();
            if (res.ok) {
                setBiodataId(result.biodataId);
                setStatusMessage(`Biodata published successfully. Your Biodata ID is ${result.biodataId}`);
            } else {
                setStatusMessage(`Failed to publish: ${result.message}`);
            }
        } catch (err) {
            console.error(err);
            setStatusMessage("An unexpected error occurred.");
        }
    };

    return (
        <div>
            <Helmet>
                <title>Edit Biodata</title>
            </Helmet>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
                <fieldset>
                    <legend className="text-center text-3xl font-semibold mb-6 text-amber-900 bg-amber-50">Biodata Form</legend>

                    {/* Gender */}
                    <label htmlFor="biodataType" className="block font-medium mb-1">Biodata Type <span className="text-red-600">*</span>:</label>
                    <select name="biodataType" onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                        <option value="" disabled>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    {/* Name */}
                    <label htmlFor="name" className="block font-medium mb-1">Name <span className="text-red-600">*</span>:</label>
                    <input type="text" name="name" onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />

                    {/* Profile Image */}
                    <label className="block font-medium mb-1">Profile Image Link or Upload:</label>
                    <input type="url" name="profileImageLink" placeholder="Image URL" onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mb-2" />
                    <p className="text-center text-gray-500 mb-2">or</p>
                    <input type="file" name="profileImageFile" accept="image/*" onChange={handleChange} className="w-full mb-6" />

                    {/* DOB, Height, Weight, etc. */}
                    <label htmlFor="dob" className="block font-medium mb-1">Date of Birth <span className="text-red-600">*</span>:</label>
                    <input type="date" name="dob" onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />

                    <label htmlFor="height" className="block font-medium mb-1">Height <span className="text-red-600">*</span>:</label>
                    <select name="height" onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                        <option value="" disabled>Select Height</option>
                        {[...Array(11)].map((_, i) => (
                            <option key={i} value={`${140 + i * 5}cm`}>{140 + i * 5} cm</option>
                        ))}
                    </select>

                    <label htmlFor="weight" className="block font-medium mb-1">Weight <span className="text-red-600">*</span>:</label>
                    <select name="weight" onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                        <option value="" disabled>Select Weight</option>
                        {[...Array(11)].map((_, i) => (
                            <option key={i} value={`${40 + i * 5}kg`}>{40 + i * 5} kg</option>
                        ))}
                    </select>

                    {/* Age */}
                    <label htmlFor="age" className="block font-medium mb-1">Age <span className="text-red-600">*</span>:</label>
                    <input type="number" name="age" min="0" max="120" onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />

                    {/* More fields */}
                    <label htmlFor="occupation" className="block font-medium mb-1">Occupation <span className="text-red-600">*</span>:</label>
                    <select name="occupation" onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                        <option value="" disabled>Select Occupation</option>
                        {["Student", "Engineer", "Doctor", "Teacher", "Business", "Others"].map(opt => (
                            <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                        ))}
                    </select>

                    {/* Race */}
                    <label htmlFor="race" className="block font-medium mb-1">Race (Skin Color) <span className="text-red-600">*</span>:</label>
                    <select name="race" onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                        <option value="" disabled>Select Race</option>
                        {["Fair", "Medium", "Dark"].map(opt => (
                            <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                        ))}
                    </select>

                    {/* Parents */}
                    <label htmlFor="fatherName" className="block font-medium mb-1">Father's Name:</label>
                    <input type="text" name="fatherName" onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />

                    <label htmlFor="motherName" className="block font-medium mb-1">Mother's Name:</label>
                    <input type="text" name="motherName" onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />

                    {/* Divisions */}
                    {["permanentDivision", "presentDivision"].map(field => (
                        <div key={field}>
                            <label htmlFor={field} className="block font-medium mb-1">{field === "permanentDivision" ? "Permanent Division" : "Present Division"} <span className="text-red-600">*</span>:</label>
                            <select name={field} onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                                <option value="" disabled>Select {field}</option>
                                {["Dhaka", "Chattagram", "Rangpur", "Barisal", "Khulna", "Mymensingh", "Sylhet"].map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        </div>
                    ))}

                    {/* Partner Preferences */}
                    <label htmlFor="expectedPartnerAge" className="block font-medium mb-1 mt-4">Expected Partner Age:</label>
                    <input type="number" name="expectedPartnerAge" onChange={handleChange} min="18" max="100" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />

                    <label htmlFor="expectedPartnerHeight" className="block font-medium mb-1">Expected Partner Height <span className="text-red-600">*</span>:</label>
                    <select name="expectedPartnerHeight" onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                        <option value="" disabled>Select Height</option>
                        {[...Array(11)].map((_, i) => (
                            <option key={i} value={`${140 + i * 5}cm`}>{140 + i * 5} cm</option>
                        ))}
                    </select>

                    <label htmlFor="expectedPartnerWeight" className="block font-medium mb-1">Expected Partner Weight <span className="text-red-600">*</span>:</label>
                    <select name="expectedPartnerWeight" onChange={handleChange} required className="w-full border border-gray-300 rounded px-3 py-2 mb-6">
                        <option value="" disabled>Select Weight</option>
                        {[...Array(11)].map((_, i) => (
                            <option key={i} value={`${40 + i * 5}kg`}>{40 + i * 5} kg</option>
                        ))}
                    </select>

                    {/* Contact Email */}
                    <label htmlFor="contactEmail" className="block font-medium mb-1">Contact Email:</label>
                    <input
                        type="email"
                        name="contactEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        className="w-full border border-gray-300 bg-gray-100 rounded px-3 py-2 mb-4"
                    />

                    {/* Mobile */}
                    <label htmlFor="mobileNumber" className="block font-medium mb-1">Mobile Number <span className="text-red-600">*</span>:</label>
                    <input type="tel" name="mobileNumber" pattern="[0-9]{10,15}" onChange={handleChange} required placeholder="Enter mobile number" className="w-full border border-gray-300 rounded px-3 py-2 mb-6" />

                    {/* Submit */}
                    <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded transition duration-200">
                        Submit
                    </button>

                    {statusMessage && (
                        <p className="text-center text-green-700 mt-4">{statusMessage}</p>
                    )}
                </fieldset>
            </form>
        </div>
    );
};

export default Editbiodata;
