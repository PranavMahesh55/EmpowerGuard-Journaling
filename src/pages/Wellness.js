import React from 'react';
import { FaHeart, FaHandsHelping, FaHeadphonesAlt } from 'react-icons/fa';

const Wellness = ({ username }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Wellness & Support</h2>
      <p style={styles.intro}>
        Hi {username}, welcome to your personal wellness hub. Here you’ll find resources, self‑care tips, and inspirational content to support your mental health.
      </p>
      
      <div style={styles.cardContainer}>
        {/* Self-Care Tips */}
        <div style={styles.card}>
          <FaHeart size={48} color="#ff6b6b" />
          <h3 style={styles.cardTitle}>Self‑Care Tips</h3>
          <ul style={styles.list}>
            <li>Take regular breaks and practice mindfulness.</li>
            <li>Engage in physical activity daily.</li>
            <li>Maintain a balanced diet and sleep schedule.</li>
          </ul>
        </div>

        {/* Support Resources */}
        <div style={styles.card}>
          <FaHandsHelping size={48} color="#4dabf7" />
          <h3 style={styles.cardTitle}>Support Resources</h3>
          <ul style={styles.list}>
            <li>
              <a href="https://www.suicidepreventionlifeline.org" target="_blank" rel="noopener noreferrer">
                National Suicide Prevention Lifeline (988)
              </a>
            </li>
            <li>
              <a href="https://www.crisistextline.org" target="_blank" rel="noopener noreferrer">
                Crisis Text Line (741741)
              </a>
            </li>
            <li>
              <a href="https://www.thehotline.org" target="_blank" rel="noopener noreferrer">
                Domestic Violence Hotline (1-800-799-7233)
              </a>
            </li>
          </ul>
        </div>

        {/* Mindfulness Exercises (Centered) */}
        <div style={{ ...styles.card, ...styles.centerCard }}>
          <FaHeadphonesAlt size={48} color="#ffd11a" />
          <h3 style={styles.cardTitle}>Mindfulness Exercises</h3>
          <ul style={styles.list}>
            <li>Practice deep breathing for 5 minutes.</li>
            <li>Try guided meditation with free apps.</li>
            <li>Write down things you’re grateful for.</li>
          </ul>
        </div>
      </div>
      
      <div style={styles.quoteSection}>
        <h3 style={styles.quoteTitle}>Motivational Quote</h3>
        <blockquote style={styles.quote}>
          "The greatest wealth is health." – Virgil
        </blockquote>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '10px',
    color: '#333',
  },
  intro: {
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '30px',
    color: '#666',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    flex: '1 1 250px',
    backgroundColor: '#fff',
    margin: '10px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  centerCard: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardTitle: {
    fontSize: '20px',
    margin: '10px 0',
    color: '#333',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
    color: '#555',
    lineHeight: '1.6',
  },
  quoteSection: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#e8f5e9',
    borderRadius: '8px',
    textAlign: 'center',
  },
  quoteTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#333',
  },
  quote: {
    fontStyle: 'italic',
    fontSize: '18px',
    color: '#555',
  },
};

export default Wellness;