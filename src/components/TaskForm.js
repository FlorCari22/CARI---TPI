import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, editedTask }) => {
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (editedTask) {
      setTaskName(editedTask.name);
    }
  }, [editedTask]);

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      if (editedTask) {
        editTask({ ...editedTask, name: taskName });
      } else {
        addTask({ id: new Date().getTime(), name: taskName, completed: false });
      }
      setTaskName("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        textAlign: "center",
        fontSize: "1.5em",
        fontFamily: "Arial, sans-serif",
      }}>
      <input
        type="text"
        value={taskName}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          margin: "10px 0",
          fontSize: "1em",
          borderRadius: "8px",
          border: "1px solid #ccc",
          background: "rgba(169, 169, 169, 0.3)",
          width: "30%",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px",
          fontSize: "1em",
          backgroundColor: "#388E8E",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginTop: "50px",
          marginLeft: "20px",
          cursor: "pointer",
        }}>
        {editedTask ? "Guardar Cambios" : "Agregar Tarea"}
      </button>
    </form>
  );
};

export default TaskForm;
