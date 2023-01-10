function ChoiceButton({ img, name }) {
  return (
    <div className="choice-button">
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
}

export default ChoiceButton;
