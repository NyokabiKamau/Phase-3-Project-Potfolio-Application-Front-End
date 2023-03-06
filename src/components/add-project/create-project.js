import React, { useState } from "react";
import './create-project.css'


const CreateProject = () => {

    //const [project, setProject] = useState([])
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])
    const [user, setUser] = useState([])

   let addData = {
        "title" : title,
        "description": description,
        "user_id": user
    }

    function handleTitle(e){
        e.preventDefault()
        setTitle(e.target.value)
    }

    function handleDescription(e){
        e.preventDefault()
        setDescription(e.target.value)
    }

    function handleUser(e){
        e.preventDefault()
        setUser(e.target.value)
    }


    function handleSubmit(e) {
        fetch("https://phase-3-project-potfolio-app-back-end.onrender.com/projects/create", {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(addData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
         });
    }

   
    return (
        <div className="studentbackground">
        <div className="form" onSubmit={e => e.preventDefault()}>
            <h2>Add New Project</h2>
            <div className="container">
                <form id="student-form">
                    <label>Project Title</label>
                    <input
                    type="text"
                    style={{color: "#000000"}}
                    id="name"
                    name="title"
                    value={title}
                    onChange={handleTitle}
                    />

                    <label>Project Description</label>
                    <input
                    type="text"
                    style={{color: "#000000"}}
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleDescription}
                    />
                    
                    <label>Project User Id</label>
                    <input
                    type="number"
                    style={{color: "#000000"}}
                    id="user"
                    name="user"
                    value={user}
                    onChange={handleUser}
                    />
                    
                    <button onClick={handleSubmit} id="btn" type="submit">Add</button>
                </form>
            </div>
        </div>
        </div>
    );
};
export default CreateProject;
