import React, { useState } from 'react';

const Registration = ({ onRegister }) => {
    const [username, setUsername] = useState('');

    const handleRegistration = () => {
        if (username.trim() !== '') {
            onRegister(username);
        }
    };

    return (
        <div>
            <h2>Register Your Username</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
            />
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default Registration;
