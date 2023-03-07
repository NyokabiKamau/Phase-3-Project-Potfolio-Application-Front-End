import React, { useState } from "react";
import './create-project.css'
import {FaPlus} from 'react-icons/fa'
const CreateProject = () => {

    //const [project, setProject] = useState([])
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])

   let addData = {
        "title" : title,
        "description": description,
    }

    function handleTitle(e){
        e.preventDefault()
        setTitle(e.target.value)
    }

    function handleDescription(e){
        e.preventDefault()
        setDescription(e.target.value)
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
            alert("Successfully added")
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
                    
                    <button onClick={handleSubmit} id="addBtn" type="submit"><FaPlus/></button>
                </form>
            </div>
        </div>
        </div>
    );
};
export default CreateProject;
