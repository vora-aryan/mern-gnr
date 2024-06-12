const MyButton = ({ text, type, onClickEvent }) => {
  return (
    <button onClick={onClickEvent} className={`btn btn-${type || "primary"}`}>
      {text || "Test"}
    </button>
  );
};
export default MyButton;
