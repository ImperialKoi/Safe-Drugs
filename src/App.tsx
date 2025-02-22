import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Shield, FileCheck, Brain, Lock, ChevronRight, Database, AlertTriangle, Camera } from 'lucide-react';
import QRScanner from './components/QRScanner';
import LoginPage from './components/Login';
import DashboardPage from './components/Dashboard';
import AboutPage from './components/About';
import SignUpPage from './components/Signup';

function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">PharmGuard AI</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/scan" className="text-gray-600 hover:text-gray-900 flex items-center">
              <Camera className="w-5 h-5 mr-1" />
              Scan QR
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 flex items-center">
              About
            </Link>
            <button 
              onClick={() => navigate('/login')}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Login
            </button>
          </div>
        </nav>
      </header>

      {children}

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-primary-400" />
                <span className="font-bold">PharmGuard AI</span>
              </div>
              <p className="text-gray-400">
                Securing the pharmaceutical supply chain through advanced AI and blockchain technology
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Security</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Secure Drug Authentication Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leverage AI and blockchain technology to verify pharmaceutical processes
            and protect against counterfeits with military-grade security.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/scan"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition flex items-center"
            >
              <Camera className="w-6 h-6 mr-2" />
              Scan QR Code
            </Link>
            <Link
              to="/login"
              className="bg-secondary-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-900 transition flex items-center"
            >
              Submit Process
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Process Submission</h3>
              <p className="text-gray-600">
                Submit your pharmaceutical process details through our secure platform
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI system analyzes the process for potential red flags
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Blockchain Security</h3>
              <p className="text-gray-600">
                Results are securely stored on the NEAR blockchain for transparency
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Security
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Database className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Immutable Records</h3>
                    <p className="text-gray-600">All verifications are permanently recorded on the NEAR blockchain</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-6 h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Real-time Alerts</h3>
                    <p className="text-gray-600">Instant notifications for suspicious activities or potential threats</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Security Dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/scan" element={<Layout><QRScanner /></Layout>} />
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/signup" element={<Layout><SignUpPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;