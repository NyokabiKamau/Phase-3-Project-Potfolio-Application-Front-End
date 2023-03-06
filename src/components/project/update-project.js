import React, { useState } from "react";

function UpdateProject({ id, onUpdate }) {
  const [title, setTitle] = useState(title);
  const [description, setDescription] = useState(description);

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`https://phase-3-project-potfolio-app-back-end.onrender.com/projects/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description, description
      }),
    })
      .then((r) => r.json())
      .then((data) => onUpdate(data));
  }

  return (
    <form className="edit" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <input type="text" placeholder="desciption" value={title} onChange={(e) => setDescription(e.target.value)}/>
      <input type="submit" value="Save" />
    </form>
  );
}

export default UpdateProject;