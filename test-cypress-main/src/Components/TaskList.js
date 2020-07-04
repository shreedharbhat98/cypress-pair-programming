import React from 'react'

const TaskItem = ({task, onChange}) =>

  <li >
    <div >
    <input type="checkbox" onChange={onChange} checked={task.status} className="toggle-checkbox" id={task.id} />
      <label style={{textDecoration: task.status ? "line-through" : "none", color : task.status ? "green" : "black"}} className="label">
        {task.title}
      </label>
    </div>
  </li>

const TaskList = props =>
  <ul className="task-list">
    {props.todos.map(todo => <TaskItem task={todo} onChange={props.onChange} />)}
  </ul>

export default TaskList