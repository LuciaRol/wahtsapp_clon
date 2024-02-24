import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const socket = io('http://localhost:4000'); // Change the URL if your server is hosted elsewhere

    useEffect(() => {
        // Listen for incoming messages
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        // Clean up the connection on unmount
        return () => {
            socket.disconnect();
        };
    }, [messages, socket]);

    // Function to send a message
    const sendMessage = () => {
        socket.emit('message', input);
        setInput('');
    };

    return (
        <div>
            {/* Display messages */}
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            {/* Input field and send button */}
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
