import ChoiceButton from "../components/ChoiceButton";

import rock from "../assets/hand-rock.svg";
import paper from "../assets/hand-paper.svg";
import scissors from "../assets/hand-scissors.svg";

function ChoiceLayout() {
  return (
    <div>
      <ChoiceButton img={rock} name="rock" />
      <ChoiceButton img={paper} name="paper" />
      <ChoiceButton img={scissors} name="scissors" />
    </div>
  );
}

export default ChoiceLayout;
