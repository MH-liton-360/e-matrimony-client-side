import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AppointmentModal = ({ appointment, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        datetime: "",
        note: "",
        meetingType: "Offline Meeting"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do form submission (e.g., send to server)
        console.log("Submitted:", formData);

        // Reset and close modal
        setFormData({
            name: "",
            phone: "",
            email: "",
            datetime: "",
            note: "",
            meetingType: "Offline Meeting"
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-opacity-50 z-50 flex justify-center items-center">
            <Helmet>
                <title>Appointment Form</title>
            </Helmet>
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
                <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold">&times;</button>

                <h2 className="text-xl font-semibold mb-4 text-green-700">📅 Take An Appointment</h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Name<span className="text-red-500">*</span></label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Phone<span className="text-red-500">*</span></label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Date & Time<span className="text-red-500">*</span></label>
                        <input type="datetime-local" name="datetime" value={formData.datetime} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block mb-1 font-medium">Meeting Type</label>
                        <select name="meetingType" value={formData.meetingType} onChange={handleChange} className="w-full border rounded px-3 py-2">
                            <option>Offline Meeting</option>
                            <option>Online Meeting</option>
                        </select>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block mb-1 font-medium">Note (optional)</label>
                        <textarea name="note" value={formData.note} onChange={handleChange} className="w-full border rounded px-3 py-2" rows={3}></textarea>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block mb-2 font-medium">Security Code</label>
                        {/* reCAPTCHA placeholder - integrate actual reCAPTCHA if needed */}
                        <div className="bg-gray-100 border rounded p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" required />
                                <span>I'm not a robot</span>
                            </div>
                            <img
                                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                                alt="reCAPTCHA"
                                className="h-6"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2 text-right">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded shadow-md"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentModal;
