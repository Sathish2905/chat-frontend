import React from 'react';

const MessageArea = ({ messages }) => {
  return (
    <div style={{ flex: 1, padding: '10px', overflowY: 'scroll', height: '400px' }}>
      {messages.map((msg, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <strong>{msg.sender}</strong>: {msg.text}
        </div>
      ))}
    </div>
  );
};

export default MessageArea;
