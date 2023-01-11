export const CharacterCard = ({ name, image, id, species, gender, origin, status }) => {
    return (
        <>
            <p>{name}</p>
            <img src={image} alt={name} />
        </>
    );
}
