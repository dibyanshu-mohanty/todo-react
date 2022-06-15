import "./Goals.css";

const Goal = (props) => {
  const deleteHandler = () => {
    props.onDeleteHandler(props.id);
  };
  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default Goal;
