import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import PatientDashboard from './components/PatientDashboard'
import DoctorDashboard from './components/DoctorDashboard'

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive
          ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/50'
          : 'text-slate-400 hover:text-white hover:bg-slate-800'
        }`}
    >
      {children}
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="flex justify-center gap-4 mb-8">
      <NavLink to="/">Patient Portal</NavLink>
      <NavLink to="/doctor">Doctor Portal</NavLink>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-indigo-500 selection:text-white">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <header className="mb-8 text-center">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
              Hospital Appointments
            </h1>
            <p className="text-slate-400 text-lg mb-8">Premium Healthcare at Your Fingertips</p>

            <Navigation />
          </header>

          <main className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 min-h-[500px]">
            <Routes>
              <Route path="/" element={<PatientDashboard />} />
              <Route path="/doctor" element={<DoctorDashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
