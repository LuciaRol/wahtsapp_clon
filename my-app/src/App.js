import React, { useState } from 'react';
import Registration from './components/registration';
import Chat from './components/Chat';

const App = () => {
    const [username, setUsername] = useState('');

    const handleRegister = (username) => {
        setUsername(username);
    };

    return (
        <div>
            {!username ? <Registration onRegister={handleRegister} /> : <Chat username={username} />}
        </div>
    );
};

export default App;
