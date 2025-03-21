import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaHome, FaBook, FaChartBar, FaUser, FaHeartbeat } from 'react-icons/fa';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Wellness from './pages/Wellness';
import CommunityForum from './pages/CommunityForum';
import Login from './pages/Login';


function App() {
  const [username, setUsername] = useState('');

  return (
    <div style={styles.appContainer}>
      {!username ? (
        <Login setUsername={setUsername} />
      ) : (
        <>
          <main style={styles.main}>
            <Routes>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/journal" element={<Journal username={username} />} />
              <Route path="/dashboard" element={<Dashboard username={username} />} />
              <Route path="/profile" element={<Profile username={username} />} />
              <Route path="/wellness" element={<Wellness username={username} />} />
              <Route path="/community" element={<CommunityForum />} />
            </Routes>
          </main>

          {/* Bottom fixed nav bar with icons and text */}
          <nav style={styles.bottomNav}>
            <Link to="/" style={styles.iconLink}>
              <FaHome size={24} />
              <span style={styles.iconLabel}>Home</span>
            </Link>
            <Link to="/journal" style={styles.iconLink}>
              <FaBook size={24} />
              <span style={styles.iconLabel}>Journal</span>
            </Link>
            <Link to="/dashboard" style={styles.iconLink}>
              <FaChartBar size={24} />
              <span style={styles.iconLabel}>Dashboard</span>
            </Link>
            <Link to="/wellness" style={styles.iconLink}>
              <FaHeartbeat size={24} />
              <span style={styles.iconLabel}>Wellness</span>
            </Link>
            <Link to="/profile" style={styles.iconLink}>
              <FaUser size={24} />
              <span style={styles.iconLabel}>Profile</span>
            </Link>
          </nav>
        </>
      )}
    </div>
  );
}

const styles = {
  appContainer: {
    paddingBottom: '60px', // ensures content isn't hidden by fixed nav
    fontFamily: 'sans-serif',
  },
  main: {
    padding: '20px',
  },
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60px',
    backgroundColor: '#1976d2',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 9999,
  },
  iconLink: {
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: '12px',
    marginTop: '4px',
  },
};

export default App;