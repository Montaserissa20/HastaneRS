import { useState } from 'react'

function DoctorDashboard() {
    // Mock appointments
    const [appointments] = useState([
        { id: 1, patient: 'John Doe', time: '09:00 AM', status: 'Confirmed' },
        { id: 2, patient: 'Jane Smith', time: '10:00 AM', status: 'Pending' },
        { id: 3, patient: 'Bob Johnson', time: '02:00 PM', status: 'Confirmed' },
    ])

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-indigo-300">My Schedule</h2>

            <div className="overflow-hidden rounded-xl border border-slate-700">
                <table className="w-full text-left text-slate-300">
                    <thead className="bg-slate-700 text-slate-100 uppercase text-sm font-bold">
                        <tr>
                            <th className="px-6 py-4">Time</th>
                            <th className="px-6 py-4">Patient Name</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700 bg-slate-800">
                        {appointments.map((apt) => (
                            <tr key={apt.id} className="hover:bg-slate-700/50 transition-colors">
                                <td className="px-6 py-4 font-medium text-white">{apt.time}</td>
                                <td className="px-6 py-4">{apt.patient}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${apt.status === 'Confirmed'
                                            ? 'bg-emerald-500/10 text-emerald-400'
                                            : 'bg-amber-500/10 text-amber-400'
                                        }`}>
                                        {apt.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-indigo-400 hover:text-indigo-300 font-medium text-sm">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DoctorDashboard
