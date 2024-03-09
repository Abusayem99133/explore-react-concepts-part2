import { useState } from "react";

export default function Team() {
  const [teamCount, setTeam] = useState(11);
  const handleAdd = () => {
    const newTeam = teamCount + 1;
    setTeam(newTeam);
  };
  const handleRemove = () => {
    setTeam(teamCount - 1);
  };
  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };
  return (
    <div style={teamStyle}>
      <h2>Players: {teamCount}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
