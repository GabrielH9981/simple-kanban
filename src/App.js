import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import TaskList from './components/TaskList/TaskList';

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return[...existingTasks, newTask];
    });
  };

  const UpdateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => { 
        if (task.id === id) {
          return {...task, title, state};
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) =>{
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">

      <Navbar />
      
      <div className="container">
        <TaskList 
          title="Pendente" 
          taskState="Pendente"
          onAddTask={addTask} 
          tasks={tasks.filter((t) => t.state === "Pendente")} 
          onTaskUpdate={UpdateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList 
          title="Fazendo"
          taskState="Fazendo"
          onAddTask={addTask} 
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={UpdateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList 
          title="Completa"
          taskState="Completa"
          onAddTask={addTask} 
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={UpdateTask}
          onDeleteTask={deleteTask}
        />
      </div>

    </div>
  );
}

export default App;
