import "./GoalsList.css";
import Goal from "./Goals";

const GoalsList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((item) => (
        <Goal id={item.id} key={item.id} onDeleteHandler={props.onClickHandler}>
          {item.title}
        </Goal>
      ))}
    </ul>
  );
};

export default GoalsList;
