import React, { useState } from 'react';
import axios from 'axios';

const AdminCircularForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/circulars', {
        title,
        content,
        date,
      });

      console.log(res.data);
      alert('Circular posted successfully!');
    } catch (err) {
      console.error(err);
      alert('Error posting circular.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button type="submit">Post Circular</button>
    </form>
  );
};

export default AdminCircularForm;
