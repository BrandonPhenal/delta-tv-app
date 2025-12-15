import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth.login(username, password)) {
      navigate(from, { replace: true });
    } else {
      setError('Invalid username or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page-container">
      <div className="login-image-section">
        {/* You can add an image or other branding here */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ3DlG56cy_200K6FTm6CfwyzxocD2IDlOoQ&s" alt="Delta TV Uganda" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="login-form-section">
        <div className="card" style={{ maxWidth: '400px', margin: 'auto' }}>
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                className="form-control"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div style={{ position: 'relative' }}> {/* Wrapper for input and toggle */}
                <input
                  id="password"
                  className="form-control"
                  type={showPassword ? 'text' : 'password'} // Dynamic type
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0',
                    color: '#007bff'
                  }}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn btn-primary">Log In</button>
          </form>
          <div className="demo-credentials" style={{ marginTop: '1rem' }}>
            <p>Demo credentials:</p>
            <p>Username: <strong>admin</strong></p>
            <p>Password: <strong>password</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
