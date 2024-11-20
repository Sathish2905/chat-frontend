import React from 'react';

const ChatList = ({ users }) => {
  return (
    <div style={{ width: '25%', borderRight: '1px solid #ddd', padding: '10px' }}>
      <h3>Active Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
