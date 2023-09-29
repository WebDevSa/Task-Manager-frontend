import Task from './components/Task'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { getAllTask, addTask, updateTask,deleteTask } from './utils/HandleApi';
import TaskList from './components/TaskList';



function App() {

  const [task, setTask] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [taskId, setTaskId]=useState()
  const [showTaskList, setShowTaskList] = useState(false);// this is hide and view the tasklist//

  useEffect(() => {
    getAllTask(setTask)
  },[])


  const updateMode = (_id, text) => {
        setIsUpdating(true)
        setText(text)
        setTaskId(_id)
  }

  const toggleTaskList = () => {
    setShowTaskList(!showTaskList); // Toggle the state
  };

  return (
    <div className="page-container">
    <Router>
      <div className="App">
        <div className="container">
          <h1>Task Manager</h1>
          <div className="top">
            <input
              type="text"
              placeholder="Add your task here.."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div
              className="add"
              onClick={() => {
                if (text.trim() === "") {
                  alert("Enter some task to add.");
                } else {
                  if (isUpdating) {
                    updateTask(taskId, text, setTask, setText, setIsUpdating);
                  } else {
                    addTask(text, setText, setTask);
                  }
                }
              }}
            >
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>
          
          <div className="list">
            {task.map((item) => (
              <Task
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteTask={() => deleteTask(item._id, setTask)}
              />
            ))}
          </div>
          <div className="task-list-link">
            <Link to="/task-list" className="link" onClick={toggleTaskList}>
            {showTaskList ? "Hide Task List" : "View Task List"}
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/task-list" element={showTaskList && <TaskList />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

