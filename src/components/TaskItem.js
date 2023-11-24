import React, { useState } from "react";

const TaskItem = ({ task, onComplete, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);

  const handleSaveEdit = () => {
    setEditing(false);
    onEdit(task.id);
  };

  const taskStyle = {
    border: "3px solid #ddd",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "80%",
    maxHeight: "auto",
    overflowY: "auto",
    margin: "0 auto",
    background: "rgba(169, 169, 169, 0.3)",
    overflow: "hidden",
    position: "relative",
  };

  const iconStyle = {
    fontSize: "1.5em",
    marginRight: "10px",
  };

  const textStyle = {
    flex: "1",
    textDecoration: task.completed ? "line-through" : "none",
    fontSize: "1.2em",
    color: task.completed ? "#555" : "inherit",
    textAlign: "justify",
  };

  const buttonContainerStyle = {
    position: "relative",
    right: "10px",
    display: "flex",
    marginLeft: "25px",
  };

  const buttonStyle = {
    padding: "8px",
    fontSize: "1em",
    backgroundColor: "#388E8E",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "5px",
  };

  return (
    <li style={taskStyle}>
      <span style={iconStyle}>{task.completed ? "✅" : "📝"}</span>
      {editing ? (
        <>
          <input
            type="text"
            value={task.name}
            onChange={(e) => onEdit({ ...task, name: e.target.value })}
            style={{
              padding: "8px",
              fontSize: "1.2em",
              borderRadius: "5px",
              border: "1px solid #ddd",
              width: "80%",
            }}
          />
          <button onClick={handleSaveEdit} style={buttonStyle}>
            Guardar
          </button>
        </>
      ) : (
        <>
          <span style={textStyle}>{task.name}</span>
          <div style={buttonContainerStyle}>
            {task.completed ? (
              <button onClick={() => onDelete(task.id)} style={buttonStyle}>
                ❌
              </button>
            ) : (
              <>
                <button onClick={() => onComplete(task.id)} style={buttonStyle}>
                  ✅
                </button>
                <button onClick={() => setEditing(true)} style={buttonStyle}>
                  📝
                </button>
                <button onClick={() => onDelete(task.id)} style={buttonStyle}>
                  ❌
                </button>
              </>
            )}
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
