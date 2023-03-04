import React from "react";
import './project-item.css'
//import Login from '../login/login'
import {MdDeleteForever} from 'react-icons/md'

function ProjectItem({title, description, deleteProject, id}) {

    return (
        <div id="head" className="mt-5">
            <div key={id} className="App-li">
                <h2>{title}</h2>
                <p>{description}</p>
                <button id="delete" onClick={()=> deleteProject(id)}><MdDeleteForever/></button> 
            </div>
        </div>
    )
}

export default ProjectItem