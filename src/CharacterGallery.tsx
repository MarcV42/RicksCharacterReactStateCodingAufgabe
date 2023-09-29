// CharacterGallery.tsx
import React from 'react';
import CharacterList from "./CharacterList.tsx";
import Menu from "./Menu.tsx";
import "./App.css"

function CharacterGallery() {
    return (
        <div>
            <h2>Rick and Morty Gallery</h2>
            <Menu/>
          <li><ul> <CharacterList/></ul></li>
        </div>
    );
}

export default CharacterGallery;
