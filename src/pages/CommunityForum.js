import React, { useState } from 'react';

const CommunityForum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        content: newPost.trim()
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Community Forum</h2>
      <p style={styles.subHeader}>
        Share your experiences, advice, and support anonymously.
      </p>
      <form onSubmit={handlePostSubmit} style={styles.form}>
        <textarea 
          placeholder="Write your post here..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Post</button>
      </form>
      <div style={styles.postsContainer}>
        {posts.length === 0 ? (
          <p>No posts yet. Be the first to share!</p>
        ) : (
          posts.map(post => (
            <div key={post.id} style={styles.post}>
              <p>{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '10px'
  },
  subHeader: {
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '20px',
    color: '#555'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
    marginBottom: '10px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-end'
  },
  postsContainer: {
    marginTop: '20px'
  },
  post: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginBottom: '10px'
  }
};

export default CommunityForum;