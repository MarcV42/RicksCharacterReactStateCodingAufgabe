// CharacterGallery.tsx
import React from 'react';
import CharacterList from "./CharacterList.tsx";
import Menu from "./Menu.tsx";

function CharacterGallery() {
    return (
        <div>
            <h2>Rick and Morty Gallery</h2>
            <Menu/>
            <CharacterList/>
        </div>
    );
}

export default CharacterGallery;
