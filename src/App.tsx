// App.tsx


import CharacterList from './CharacterList';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "./WelcomePage.tsx";
import CharacterGallery from "./CharacterGallery.tsx";


function App() {
    return (
      /*  <div className="app">
            <h1>Rick and Morty Characters</h1>
            <CharacterList />

        </div>  */
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/character" element={<CharacterGallery />} />


        </Routes>





    );
}

export default App;
