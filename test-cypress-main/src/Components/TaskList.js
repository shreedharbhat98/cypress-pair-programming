import React from "react";

const TaskItem = ({ task, onChange, onDelete }) => (
  <li className={"task-li"}>
    <div>
      <input
        type="checkbox"
        onChange={onChange}
        checked={task.status}
        className="toggle-checkbox"
        id={task.id}
      />
      <label
        style={{
          textDecoration: task.status ? "line-through" : "none",
          color: task.status ? "green" : "black",
        }}
        className="label"
      >
        {task.title}
      </label>
      <button id={"btn" + task.id} onClick={onDelete} className={"deleteBtn"}>
        Delete
      </button>
    </div>
  </li>
);

const TaskList = (props) => (
  <ul className="task-list">
    {props.todos.map((todo) => (
      <TaskItem
        key={todo.id}
        task={todo}
        onChange={props.onChange}
        onDelete={props.onDelete}
      />
    ))}
  </ul>
);

export default TaskList;
