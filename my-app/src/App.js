import React from 'react';
import Chat from './components/Chat'; // Importing the Chat component from the components directory

const App = () => {
    return (
        <div>
            <h1>Chat Application</h1>
            <Chat /> {/* Rendering the Chat component */}
        </div>
    );
};

export default App;
