import "./Characters.css";
import useCharacters from "../hooks/useCharacters";

const Characters = () => {
  const { data, error, isLoading } = useCharacters();

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>Error - {error.message}</p>;
  }

  const getHouseClass = (house) => {
    switch (house) {
      case "Gryffindor":
        return "house-gryffindor";
      case "Hufflepuff":
        return "house-hufflepuff";
      case "Ravenclaw":
        return "house-ravenclaw";
      case "Slytherin":
        return "house-slytherin";
      default:
        return "";
    }
  };

  console.log(data);

  return (
    <div className="characters-container">
      {data &&
        data.map((character) => (
          <div className="character-card" key={character.index}>
            <h2>{character.fullName}</h2>
            <img src={character.image} alt={character.fullName} />
            <div className="characterDetails">
              <h3>Birthdate: {character.birthdate}</h3>
              <h3>
                House:
                <span className={getHouseClass(character.hogwartsHouse)}>
                  {character.hogwartsHouse}
                </span>
              </h3>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Characters;
