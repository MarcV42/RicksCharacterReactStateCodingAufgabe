// App.tsx
import React from 'react';
import {Route, Routes} from "react-router-dom";
import CharacterList from './CharacterList'; // Ändern Sie dies auf den richtigen Dateinamen Ihrer Komponente

function App() {
    return (
        <Routes>
            <Route path="/" element={<CharacterList />} />


        </Routes>
    );
}

export default App;
