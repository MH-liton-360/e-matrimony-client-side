import { Helmet } from "react-helmet-async";



const Appointment = ({ appointment, onGetAppointment }) => {
    const {
        image,
        name,
        role,
        experience_years,
        availability,
        description,
        rating,
        has_appointment_button,
    } = appointment;

    const renderStars = (count) => {
        const fullStars = Math.floor(count);
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i}>★</span>);
            } else {
                stars.push(<span key={i}>☆</span>);
            }
        }

        return <div className="text-green-700 text-xl mt-2">{stars}</div>;
    };

    return (
        <div>
            <div className="bg-[#f2f7c3] border border-gray-300 rounded shadow-md p-4 flex items-start gap-4">
                <img
                    src={image}
                    alt={name}
                    className="w-28 h-28 object-cover rounded-full border border-gray-400"
                />

                <div className="flex-1 space-y-1">
                    <h2 className="text-xl font-bold text-black">{name}</h2>

                    <p className="text-gray-700 font-semibold uppercase text-sm">
                        ⭐ {role} &nbsp;&nbsp;
                        <span className="text-gray-700">
                            ⏱ {experience_years} YEARS IN SERVICE
                        </span>
                    </p>

                    <p>
                        <strong>Availability:</strong> {availability}
                    </p>

                    <p className="text-black">{description}</p>

                    {renderStars(rating)}
                </div>

                {has_appointment_button && (
                    <button
                        onClick={() => onGetAppointment(appointment)}
                        className="bg-[#a3bf17] hover:bg-[#8fae15] text-white text-sm font-medium px-4 py-2 rounded shadow-lg flex items-center"
                    >
                        📅 Get Appointment
                    </button>
                )}
            </div>
        </div>
    );
};

export default Appointment;
