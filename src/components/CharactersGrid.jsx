import { CharacterCard } from "./CharacterCard";

export const CharactersGrid = ({ characters }) => {
    return (
        <>
            {
                characters.map(character => (
                    <CharacterCard 
                        key={ character.id }
                        { ...character }
                    />
                ))
            }
        </>
    );
}
