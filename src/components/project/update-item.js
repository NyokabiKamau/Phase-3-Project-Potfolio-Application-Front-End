import React from "react";
import Project from './project';

function ProjectList({projects, description, deleteProject, onUpdate}) {
  
    return (
    <div className="list">
      <ul>
        {projects.map((project) => (
          <Project
            key={project.id}
            title={title}
            description={description}
            deleteProject={deleteProjecte}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;