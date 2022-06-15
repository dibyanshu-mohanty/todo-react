import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../UI/Button";
import styles from "./GoalInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     color: ${(props) => (props.invalid ? "#ff7f7f" : "black")};
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "#ff7f7f" : "#ccc")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     color: black;
//   }

//   &.invalid input {
//     border-color: #ff7f7f;
//   }
//   &.invalid label {
//     color: #ff7f7f;
//   }
// `;

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState(" ");
  let [isValid, setIsValid] = useState(true);
  const onTextChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredGoal(event.target.value);
  };
  const onAddGoalHandler = (event) => {
    event.preventDefault();
    if (enteredGoal.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onClickAddHandler(enteredGoal);
  };

  return (
    <form onSubmit={onAddGoalHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Enter Goal</label>
        <input type="text" onChange={onTextChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalInput;
