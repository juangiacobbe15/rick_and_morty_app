import { useEffect, useState } from "react";

import { getCharacters } from "../helpers/getCharacters";

export const UseFetchCharacters = ( pageNumber ) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCharactersInfo = async() => {
        const newCharacters = await getCharacters(pageNumber);
        setCharacters(newCharacters);
        setIsLoading(false);
    }

    useEffect( () => {
        getCharactersInfo();
    }, []);


    return {
        characters,
        isLoading
    };
}