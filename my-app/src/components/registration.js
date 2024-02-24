import React, { useState } from 'react';

const Registration = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const handleRegistration = () => {
        if (username.trim() !== '') {
            onRegister(username, profilePicture ? URL.createObjectURL(profilePicture) : null);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(file);
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
                onKeyPress={handleKeyPress}
                placeholder="Enter your username"
            />
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default Registration;
