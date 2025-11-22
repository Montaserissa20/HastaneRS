import { useState, useEffect } from 'react'
import axios from 'axios'

function PatientDashboard() {
    const [doctors, setDoctors] = useState([])
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const [selectedTime, setSelectedTime] = useState('')
    const [bookingStatus, setBookingStatus] = useState('')

    // Mock data in case backend is down
    const mockDoctors = [
        { id: 1, name: 'Dr. Smith', specialization: 'Cardiology' },
        { id: 2, name: 'Dr. Jones', specialization: 'Dermatology' },
        { id: 3, name: 'Dr. Brown', specialization: 'Pediatrics' },
    ]

    useEffect(() => {
        // Try to fetch from backend, fallback to mock
        axios.get('http://localhost:3000/doctors')
            .then(res => setDoctors(res.data))
            .catch(() => setDoctors(mockDoctors))
    }, [])

    const handleBook = () => {
        if (!selectedDoctor || !selectedTime) return;

        // Simulate booking
        setBookingStatus('Booking...')
        setTimeout(() => {
            setBookingStatus('Appointment Booked')
        }, 1000)
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-indigo-300">Select a Doctor</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {doctors.map(doctor => (
                    <div
                        key={doctor.id}
                        onClick={() => setSelectedDoctor(doctor)}
                        className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${selectedDoctor?.id === doctor.id
                                ? 'border-indigo-500 bg-indigo-500/20 shadow-lg shadow-indigo-500/20'
                                : 'border-slate-600 hover:border-slate-500 hover:bg-slate-700'
                            }`}
                    >
                        <div className="font-bold text-xl mb-1">{doctor.name}</div>
                        <div className="text-slate-400 text-sm">{doctor.specialization}</div>
                    </div>
                ))}
            </div>

            {selectedDoctor && (
                <div className="animate-fade-in-up">
                    <h2 className="text-2xl font-bold mb-6 text-indigo-300">Choose a Time</h2>
                    <div className="flex flex-wrap gap-3 mb-8">
                        {['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM'].map(time => (
                            <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${selectedTime === time
                                        ? 'bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30 scale-105'
                                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                    }`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>

                    <div className="border-t border-slate-700 pt-8 flex flex-col items-center">
                        <button
                            onClick={handleBook}
                            disabled={!selectedTime}
                            className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full font-bold text-lg shadow-xl shadow-indigo-900/50 hover:shadow-indigo-900/80 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Book Appointment
                        </button>

                        {bookingStatus && (
                            <div className="mt-6 text-xl font-medium text-emerald-400 animate-pulse">
                                {bookingStatus}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default PatientDashboard
