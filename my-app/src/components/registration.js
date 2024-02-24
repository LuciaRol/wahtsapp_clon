import React, { useState } from 'react';
import gatoFeliz from '../img/gato-feliz.jpg';
import gatoGrunon from '../img/gato-grunon.jpg';
import gato from '../img/gato.jpg';

const Registration = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const handleRegistration = () => {
        if (username.trim() !== '') {
            onRegister(username, profilePicture);
        }
    };

    const handlePictureChange = (selectedPicture) => {
        setProfilePicture(selectedPicture);
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
            <div>
                <label>
                    <input
                        type="radio"
                        name="profilePicture"
                        value={gatoFeliz}
                        onChange={() => handlePictureChange(gatoFeliz)}
                    />
                    
                    <img src={gatoFeliz} alt="Gato Feliz" style={{ maxWidth: '100px' }} />
                </label>
                <label>
                    <input
                        type="radio"
                        name="profilePicture"
                        value={gatoGrunon}
                        onChange={() => handlePictureChange(gatoGrunon)}
                    />
                    
                    <img src={gatoGrunon} alt="Gato Grunon" style={{ maxWidth: '100px' }} />
                </label>
                <label>
                    <input
                        type="radio"
                        name="profilePicture"
                        value={gato}
                        onChange={() => handlePictureChange(gato)}
                    />
                    
                    <img src={gato} alt="Gato" style={{ maxWidth: '100px' }} />
                </label>
            </div>
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default Registration;
