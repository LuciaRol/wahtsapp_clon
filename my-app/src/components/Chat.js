import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const socket = io('http://localhost:4000'); // Change the URL if your server is hosted elsewhere

    useEffect(() => {
        // Listen for incoming messages
        socket.on('message', (message) => {
            setMessages(prevMessages => [...prevMessages, { text: message, sender: 'Tu' }]);
        });

        // Clean up the connection on unmount
        return () => {
            socket.disconnect();
        };
    }, [socket]);

    // Function to send a message
    const sendMessage = () => {
        if (input.trim() !== '') {
            socket.emit('message', input);
            setMessages(prevMessages => [...prevMessages, { text: input, sender: 'Yo' }]); // Display sent message locally
            setInput('');
        }
    };

    // Function to handle key press events in the input field
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div>
            {/* Display messages */}
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        {message.sender === 'Yo' ? 'Yo: ' : 'Tu: '}{message.text}
                    </div>
                ))}
            </div>
            {/* Input field and send button */}
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress} // Call handleKeyPress when a key is pressed
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
