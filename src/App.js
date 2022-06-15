import "./App.css";
import React, { useState } from "react";
import GoalInput from "./components/Goals/GoalInput";
import GoalsList from "./components/Goals/GoalsList";

function App() {
  const [goalList, setGoals] = useState([]);
  const addGoalHandler = (textEntered) => {
    setGoals((prevGoals) => {
      const goals = [...prevGoals];
      goals.unshift({ title: textEntered, id: Math.random().toString() });
      return goals;
    });
  };
  const deleteGoalHandler = (id) => {
    setGoals((prevGoals) => {
      const upDatedGoals = [...prevGoals].filter((goal) => goal.id !== id);
      return upDatedGoals;
    });
  };

  let actualContent = (
    <h2 style={{ textAlign: "center" }}>
      No Goals Found ! Add something maybe !
    </h2>
  );

  if (goalList.length > 0) {
    actualContent = (
      <GoalsList items={goalList} onClickHandler={deleteGoalHandler} />
    );
  } else {
    actualContent = <h3>No Goals Added !!</h3>;
  }

  return (
    <div>
      <section id="goal-form">
        <GoalInput onClickAddHandler={addGoalHandler} />
      </section>
      <section id="goals">{actualContent}</section>
    </div>
  );
}

export default App;
