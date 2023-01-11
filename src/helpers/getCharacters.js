export const getCharacters = async( pageNumber ) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${ pageNumber }`;

    const res = await fetch(url);
    const { results } = await res.json();

    const characters = results.map( character  => ({
        id: character.id,
        image: character.image,
        name: character.name,
        origin: character.origin.name,
        species: character.species,
        status: character.status,
    }));

    return characters;
}