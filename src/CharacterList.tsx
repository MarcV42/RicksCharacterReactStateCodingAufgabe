// CharacterList.tsx



import {useEffect, useState} from "react";

type Character = {
    origin: any;
    species: any;
    id: number;
    name: string;
    image: string;
};

function CharacterList() {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
            .then((response) => response.json())
            .then((data) => {
                // Die erhaltenen Daten in den State einfügen
                setCharacters(data.results);
            });
    }, []);

    return (
        <div>
            <h2>Character List</h2>
            <ul>
                {characters.map((character) => (
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
