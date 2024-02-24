import React, { useState } from 'react';

const Registration = ({ onRegister }) => {
    const [username, setUsername] = useState('');

    const handleRegistration = () => {
        if (username.trim() !== '') {
            onRegister(username);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleRegistration();
        }
    };

    return (
        <div>
            <h2>Register Your Username</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress} // Handle Enter key press
                placeholder="Enter your username"
            />
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default Registration;
