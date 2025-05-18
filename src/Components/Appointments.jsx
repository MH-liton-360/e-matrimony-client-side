import { useEffect, useState } from "react";
import Appointment from "./Appointment";
import AppointmentModal from "./AppointmentModal";
import { Helmet } from "react-helmet-async";

const Appointments = () => {
    const [appointmentCards, setAppointmentCards] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    useEffect(() => {
        fetch('Appointments.json')
            .then((res) => res.json())
            .then((data) => setAppointmentCards(data));
    }, []);

    const handleOpenModal = (appointment) => {
        setSelectedAppointment(appointment);
    };

    const handleCloseModal = () => {
        setSelectedAppointment(null);
    };

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-3 pb-10 mt-32">
                <Helmet>
                    <title>Appointment</title>
                </Helmet>
                <h1 className="text-left font-extrabold text-3xl p-3">Get Appointment</h1>
                {appointmentCards.map((appointment) => (
                    <Appointment
                        key={appointment.id}
                        appointment={appointment}
                        onGetAppointment={handleOpenModal}
                    />
                ))}
            </div>

            {selectedAppointment && (
                <AppointmentModal
                    appointment={selectedAppointment}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default Appointments;
