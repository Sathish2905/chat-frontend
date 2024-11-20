import React, { useState } from 'react';

const InputBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div style={{ borderTop: '1px solid #ddd', padding: '10px', display: 'flex' }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ flex: 1, padding: '10px', marginRight: '10px' }}
      />
      <button onClick={handleSend} style={{ padding: '10px 20px' }}>
        Send
      </button>
    </div>
  );
};

export default InputBox;
