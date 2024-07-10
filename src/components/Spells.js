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

  console.log(data);
  return (
    <div className="spells-title">
      <h1>Spells</h1>
    </div>
  );
};

export default Spells;
