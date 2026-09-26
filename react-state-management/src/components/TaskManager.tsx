import { useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { useTheme } from "../context/ThemeContext";
import { LIGHT_THEME } from "../constants/theme";
import styles from "./TaskManager.module.css";

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [task, setTask] = useState("");
  const { theme } = useTheme();

  const addTask = () => {
    if (!task.trim()) return;
    dispatch({ type: "add", payload: task.trim() });
    setTask("");
  };

  return (
    <div className={`${styles.container} ${theme === LIGHT_THEME ? styles.light : styles.dark}`}>
      <h2>Task Manager</h2>
      <input
        className={styles.input}
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button className={styles.button} onClick={addTask} disabled={!task.trim()}>
        Add Task
      </button>
      <ul className={styles.list}>
        {tasks.map((t) => (
          <li key={t.id} className={styles.item}>
            {t.text}{" "}
            <button
              className={styles.button}
              onClick={() => dispatch({ type: "remove", payload: t.id })}
              aria-label={`Remove ${t.text}`}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
