import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import User from "./User";
import Friends from "./Friends";
function App() {
  function HandleClick() {
    alert("Clicked");
  }
  const HandleClick2 = () => {
    alert("button 2 clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h2>React Core Concepts Part 2</h2>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={HandleClick}>Click Me</button>
      <button onClick={HandleClick2}>Click 2</button>
      <button
        onClick={() => {
          alert("third Clicked");
        }}
      >
        Third
      </button>
      <button onClick={() => addToFive(7)}>Four</button>
    </>
  );
}

export default App;
