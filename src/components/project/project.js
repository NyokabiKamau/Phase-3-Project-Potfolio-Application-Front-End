import React, { useEffect, useState } from "react";
import ProjectItem from "./project-items";
import './project.css'
// import UpdateProject from "./update-project";

const PROJECT_API = "http://127.0.0.1:9292/projects"

function Project({}) {
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
        fetch(`http://127.0.0.1:9292//projects/destroy/${id}`,{
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