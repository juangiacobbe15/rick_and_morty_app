import '../styles/characterCard.css';

export const CharacterCard = ({ name, image, id, species, gender, origin, status }) => {
    return (
        <div className='character-card'>
            <p>{status}</p>
            <img src={image} alt={name} className='character-img'/>
            <p className='character-name'>{name}</p>
            <p className='bold'>{species} | {gender}</p>
            <p className='bold'>Origin: {origin}</p>
        </div>
    );
}
