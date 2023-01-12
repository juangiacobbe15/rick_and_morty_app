import { CharacterCard } from "./CharacterCard";

export const CharactersGrid = ({ characters }) => {
    return (
        <div className="characters-grid">
            {
                characters.map(character => (
                    <CharacterCard 
                        key={ character.id }
                        { ...character }
                    />
                ))
            }
        </div>
    );
}
