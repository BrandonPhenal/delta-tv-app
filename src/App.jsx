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
    fetch('http://localhost:3001/shows')
      .then(res => res.json())
      .then(data => setShows(data));
    
    fetch('http://localhost:3001/liveStream')
      .then(res => res.json())
      .then(data => setLiveStream(data));
  }, []);

  const addShow = (newShow) => {
    fetch('http://localhost:3001/shows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newShow),
    })
      .then(res => res.json())
      .then(data => setShows(prevShows => [data, ...prevShows]));
  };

  const deleteShow = (showId) => {
    fetch(`http://localhost:3001/shows/${showId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setShows(prevShows => prevShows.filter(show => show.id !== showId));
      });
  };

  const onUpdateShow = (updatedShow) => {
    fetch(`http://localhost:3001/shows/${updatedShow.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedShow),
    })
      .then(res => res.json())
      .then(data => {
        setShows(prevShows => prevShows.map(show => show.id === data.id ? data : show));
      });
  };

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
              element={<ShowsManager shows={shows} onAddShow={addShow} onUpdateShow={onUpdateShow} onDeleteShow={deleteShow} />} 
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