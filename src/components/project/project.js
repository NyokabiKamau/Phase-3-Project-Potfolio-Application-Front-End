import React, { useEffect, useState } from "react";
import ProjectItem from "./project-items";
import './project.css'
// import UpdateProject from "./update-project";

const PROJECT_API = `https://phase-3-project-potfolio-app-back-end.onrender.com/projects`

function Project() {
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(PROJECT_API)
            .then(response => response.json())
            .then(data => {
                setProject(data)
                console.log(data)
            })
    }, [])
    
    function deleteProject(id){
        fetch(`https://phase-3-project-potfolio-app-back-end.onrender.com/projects/destroy/${id}`,{
          method: "DELETE"
        })
        .then(()=>{
            setProject((data) => data.filter((item) => item.id !== id))
        })
    }

    const list = project.map((project) => {
        return (
            <ProjectItem 
            key={project.id}
            title={project.title}
            description={project.description}
            id={project.id}
            deleteProject={deleteProject}
            />
        )
    } )

    return (
        <div> 
            <h1>Project</h1>
            <div>
                {list}
            </div>
            
        </div>
    )
}

export default Project