import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { FaMicrophone } from 'react-icons/fa';
import FaceApiEmotionAnalysis from './FaceApiEmotionAnalysis'; // Ensure this component is implemented

const Journal = ({ username }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [emotionLog, setEmotionLog] = useState([]);
  const [recording, setRecording] = useState(false);

  const handleSave = async () => {
    const entryData = {
      title,
      content,
      date: new Date().toLocaleString(),
      emotionalContext: {
        tone: emotionLog.length > 0 ? emotionLog[emotionLog.length - 1].emotion : "Not provided",
        recommendations: [],
        faceLog: emotionLog,
      },
    };

    try {
      const response = await axios.post('/api/journal', entryData);
      if (response.status === 201) {
        // Reset fields after saving
        setTitle('');
        setContent('');
        setEmotionLog([]);
      }
    } catch (error) {
      console.error("Error saving entry:", error);
      alert("An error occurred while saving. Please try again.");
    }
  };

  const handleMicClick = () => {
    // Placeholder for voice-to-text or recording feature
    console.log("Mic button clicked! (Voice recording not implemented yet.)");
    setRecording(!recording);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>New Journal Entry</h2>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Title</label>
        <input 
          type="text"
          placeholder="Your entry title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.titleInput}
        />
      </div>

      <div style={styles.editorGroup}>
        <label style={styles.label}>Content</label>
        <ReactQuill 
          value={content}
          onChange={setContent}
          placeholder="Write your thoughts here..."
          style={styles.editor}
        />
      </div>

      <div style={styles.actionsRow}>
        <button onClick={handleMicClick} style={styles.micButton}>
          <FaMicrophone size={20} />
        </button>
        <button onClick={handleSave} style={styles.saveButton}>
          Save Entry
        </button>
      </div>

      <div style={styles.cameraContainer}>
        <FaceApiEmotionAnalysis onEmotionDetected={(emotion) => {
          console.log("Detected emotion:", emotion);
          setEmotionLog([...emotionLog, { emotion, timestamp: new Date().toISOString() }]);
        }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Roboto', sans-serif",
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#555',
  },
  titleInput: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  editorGroup: {
    marginBottom: '15px',
  },
  editor: {
    minHeight: '200px',
    borderRadius: '5px',
  },
  actionsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  micButton: {
    backgroundColor: '#1976d2',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
  },
  saveButton: {
    backgroundColor: '#4caf50',
    border: 'none',
    borderRadius: '5px',
    padding: '12px 20px',
    fontSize: '16px',
    color: '#fff',
    cursor: 'pointer',
    outline: 'none',
  },
  cameraContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default Journal;