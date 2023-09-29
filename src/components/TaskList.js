import React, { useState, useEffect } from 'react';
import { getAllTask } from '../utils/HandleApi';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch all tasks when the component mounts
    getAllTask(setTasks);
  }, []);

  return (
    <div className="task-list">
      <h3>All Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>ID: {task._id},  Task: {task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;