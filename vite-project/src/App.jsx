import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { tasks } from "./data/task";

function App() {
  const [taskList, setTask] = useState(tasks);

  const completedTask = taskList.filter((task) => task.state == "completed");
  const uncompletedTask = taskList.filter((task) => task.state != "completed");

  return (
    <>
      <h1>Current Tasks ({uncompletedTask.length})</h1>
      {uncompletedTask.map((task, index) => (
        <div key={index}>
          <p>{task.title}</p>
        </div>
      ))}

      <hr></hr>

      <h1>Completed Tasks ({completedTask.length})</h1>
      {completedTask.map((task, index) => (
        <div key={index}>
          <p>{task.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;
