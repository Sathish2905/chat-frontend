import React, { useState, useEffect } from 'react';
import ChatList from './components/ChatList';
import MessageArea from './components/MessageArea';
import InputBox from './components/InputBox';
import socket from './utils/socket';

const App = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for new users
    socket.on('userList', (userList) => {
      setUsers(userList);
    });

    // Listen for new messages
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('userList');
      socket.off('receiveMessage');
    };
  }, []);

  const handleSendMessage = (text) => {
    const message = { sender: 'You', text };
    setMessages((prevMessages) => [...prevMessages, message]);
    socket.emit('sendMessage', message);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ChatList users={users} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <MessageArea messages={messages} />
        <InputBox onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default App;
