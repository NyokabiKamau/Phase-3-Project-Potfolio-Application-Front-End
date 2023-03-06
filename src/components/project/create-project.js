import React, { useState } from "react";
import './create-project.css'


const CreateProject = () => {
    // const timestamp = new Date(createdAt).toLocaleTimeString();

    const [projectData, setProjectData] = useState(
        {
        title: "",
        description: ""
    }
    )


    function handleChange(e){
        setProjectData({...projectData, [e.target.name]:e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
        fetch("https://phase-3-project-potfolio-app-back-end.onrender.com/projects/create", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                "Application":"application/json"
            },
            body: JSON.stringify(projectData),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch(console.error)
    }

    return (
        <div className="studentbackground">
        <div className="form">
            <h2>Add New Project</h2>
            <div className="container">
                <form id="student-form" onSubmit={handleSubmit}>
                    <label>Project Title</label>
                    <input
                    type="text"
                    id="name"
                    name="title"
                    value={projectData.title}
                    onChange={handleChange}
                    />

                    <label>Project Description</label>
                    <input
                    type="text"
                    id="description"
                    name="description"
                    value={projectData.description}
                    onChange={handleChange}
                    />
                    
                    <button id="btn" type="submit">Add</button>
                </form>
            </div>
        </div>
        </div>
    );
};
export default CreateProject;
