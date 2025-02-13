import React, { useState } from 'react';
import axios from 'axios';

const Support = () => {
  const [ticket, setTicket] = useState({ subject: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/support/tickets', ticket);
      setResponseMessage('Support ticket submitted successfully.');
      setTicket({ subject: '', message: '' });
    } catch (err) {
      setResponseMessage('Failed to submit ticket.');
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Customer Support</h2>
      {responseMessage && <div className="mb-4">{responseMessage}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input name="subject" value={ticket.subject} onChange={handleChange} placeholder="Subject" className="border p-2 my-2" required />
        <textarea name="message" value={ticket.message} onChange={handleChange} placeholder="Describe your issue" className="border p-2 my-2" required></textarea>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit Ticket</button>
      </form>
    </div>
  );
};

export default Support;
