// CharacterList.tsx

import React, { useEffect, useState } from 'react';

type Character = {
    origin: any;
    species: any;
    id: number;
    name: string;
    image: string;
};


function CharacterList() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [error, setError] = useState<boolean>(false); // Neuer State für Fehler

    useEffect(() => {
        setError(false); // Zurücksetzen des Fehlers beim erneuten Suchen
        fetch('https://rickandmortyapi.com/api/character/')
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
            });
    }, []);

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        if (!characters.some((character) => character.name.toLowerCase() === searchTerm.toLowerCase())) {
            setError(true); // Wenn der Charakter nicht gefunden wird, Fehler anzeigen
        }
    };

    return (
        <div>
            <h2>Character List</h2>
            <input
                type="text"
                placeholder="Search by character name"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <button onClick={handleSearch}>Search</button> {/* Suchbutton hinzufügen */}
            {error && <p>Character not found</p>} {/* Fehlermeldung anzeigen, wenn error true ist */}
            <ul>
                {filteredCharacters.map((character) => (
                    <li key={character.id}>
                        <img src={character.image} alt={character.name} />
                        Name: {character.name}
                        .....Species: {character.species}
                        .....Place of Origin: {character.origin.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CharacterList;
