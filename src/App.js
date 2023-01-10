import logo from "./logo.svg";
import "./App.css";

import NumberOfRounds from "./components/NumberOfRounds";
import PlayerLayout from "./layouts/PlayerLayout";

function App() {
  return (
    <>
      <h1>Stone Paper Scissors Emulator</h1>
      <NumberOfRounds />
      <PlayerLayout />
    </>
  );
}

export default App;
