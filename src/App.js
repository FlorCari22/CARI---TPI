// src/App.js
import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleEditTask = (taskId) => {
    setEditingTaskId(taskId);
  };

  const handleSaveEditedTask = (editedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editedTask.id ? { ...task, name: editedTask.name } : task
      )
    );

    setEditingTaskId(null);
  };

  return (
    <div className="app-container">
      <TaskForm addTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        editingTaskId={editingTaskId}
        handleCompleteTask={handleCompleteTask}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
        handleSaveEditedTask={handleSaveEditedTask}
      />
    </div>
  );
};

export default App;
