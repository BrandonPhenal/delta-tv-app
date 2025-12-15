import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainApp from './pages/MainApp';
import AdminLayout from './pages/AdminLayout';
import Dashboard from './pages/Dashboard';
import ShowsManager from './pages/ShowsManager';
import PartnersManager from './pages/PartnersManager'; // Import PartnersManager
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  const [shows, setShows] = useState([]);
  const [liveStream, setLiveStream] = useState(null);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => {
        setShows(data.shows);
        setLiveStream(data.liveStream);
      });
  }, []);

  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<MainApp shows={shows} liveStream={liveStream} />} 
          />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route 
              path="shows" 
              element={<ShowsManager shows={shows} />} 
            />
            <Route path="partners" element={<PartnersManager />} /> {/* Add PartnersManager route */}
          </Route>
        </Routes>
        <Footer /> 
      </div>
    </AuthProvider>
  );
}

export default App;