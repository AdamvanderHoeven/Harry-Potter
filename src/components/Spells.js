import useSpells from "../hooks/useSpells";
import "./Spells.css";

const Spells = () => {
  const { data, error, isLoading } = useSpells();

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>Error - {error.message}</p>;
  }

  return (
    <>
      <div className="spells-title">
        <h1>Spells</h1>
      </div>
      <div className="spells-container">
        {data &&
          data.map((spell) => (
            <div>
              {spell.spell} - {spell.use}
            </div>
          ))}
      </div>
    </>
  );
};

export default Spells;
