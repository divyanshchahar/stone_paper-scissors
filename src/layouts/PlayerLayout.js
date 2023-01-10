import ChoiceLayout from "./ChoiceLayout";

function PlayerLayout() {
  return (
    <>
      <div className="container-2">
        <div className="player-1">
          <h3>Player-1</h3>
          <ChoiceLayout />
        </div>
        <div className="player-2">
          <h3>Player-2</h3>
          <ChoiceLayout />
        </div>
      </div>
    </>
  );
}

export default PlayerLayout;
