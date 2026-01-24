/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';

import Vision from './pages/Vision';
import Placeholder from './pages/Placeholder';

// Placeholder Pages (Will implement next)
// Real Home Component import trick
import HomeContent from './pages/Home';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Enterprise from './pages/Enterprise';
import Picker from './pages/Picker';
import Converter from './pages/Converter';
import Contrast from './pages/Contrast';
import Mixer from './pages/Mixer';

function App() {
  return (
    <AuthProvider>
        <Router>
            <div className="app-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomeContent />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/enterprise" element={<Enterprise />} />
                    <Route path="/vision" element={<Vision />} />
                    
                    {/* Tool Routes */}
                    <Route path="/picker" element={<Picker />} />
                    <Route path="/wheel" element={<Placeholder />} />
                    <Route path="/converter" element={<Converter />} />
                    <Route path="/contrast" element={<Contrast />} />
                    <Route path="/mixer" element={<Mixer />} />
                    
                    <Route path="*" element={<HomeContent />} />
                </Routes>
            </div>
        </Router>
    </AuthProvider>
  );
}

export default App;
