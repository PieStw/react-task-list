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
      <header className="container">
        <h1>Task Manager</h1>
      </header>

      <div className="container card">
        <h2>Current Tasks ({uncompletedTask.length})</h2>
        {uncompletedTask.map((task, index) => (
          <div key={index}>
            <p>
              <b>{task.title}</b>
              <button className={task.state}>{task.state}</button>
            </p>
            <p>Priority: {task.priority}</p>
            <p>Est. time: {task.estimatedTime}</p>
          </div>
        ))}
      </div>
      <hr></hr>
      <div className="container card">
        <h2>Completed Tasks ({completedTask.length})</h2>
        {completedTask.map((task, index) => (
          <div key={index}>
            <p>
              <b>{task.title}</b>
              <button className={task.state}>{task.state}</button>
            </p>
            <p>Priority: {task.priority}</p>
            <p>Est. time: {task.estimatedTime}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
