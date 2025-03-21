import React, { useState } from 'react';

const Login = ({ setUsername }) => {
  const [input, setInput] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setUsername(input.trim());
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Login to EmpowerGuard Journaling</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input 
            type="text" 
            placeholder="Enter your username" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #1976d2, #42a5f5)',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '350px',
  },
  heading: {
    marginBottom: '30px',
    color: '#333',
    fontFamily: "'Roboto', sans-serif",
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px 15px',
    fontSize: '16px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
    fontFamily: "'Roboto', sans-serif",
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#1976d2',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontFamily: "'Roboto', sans-serif",
  }
};

export default Login;