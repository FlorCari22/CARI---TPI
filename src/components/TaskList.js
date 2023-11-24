import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  editingTaskId,
  handleCompleteTask,
  handleDeleteTask,
  handleEditTask,
  handleSaveEditedTask,
}) => {
  const todoListStyle = {
    margin: "0 auto",
    padding: "20px",
  };

  return (
    <div style={todoListStyle}>
      <h2 style={{ textAlign: "center" }}>Lista de Tareas</h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={handleCompleteTask}
            onDelete={handleDeleteTask}
            onEdit={(editedTask) => handleSaveEditedTask(editedTask)}
          />
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
