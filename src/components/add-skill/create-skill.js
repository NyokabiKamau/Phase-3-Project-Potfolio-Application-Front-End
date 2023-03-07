import React, { useState } from "react";
import '../add-project/create-project.css'
import {FaPlus} from 'react-icons/fa'


function CreateSkill () {

    const [name, setName] = useState([])

   let addData = {
        "name" : name
    }

    function handleName(e){
        e.preventDefault()
        setName(e.target.value)
    }


    function handleSubmit() {
        fetch("https://phase-3-project-potfolio-app-back-end.onrender.com/skills/create", {
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
        <div >
        <div className="form" onSubmit={e => e.preventDefault()}>
            <h2>Add Skill</h2>
            <div className="container">
                <form id="student-form">
                    <input
                    type="text"
                    placeholder="Skill Name"
                    style={{color: "#000000"}}
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleName}
                    />
                    <button className="mt-3" onClick={handleSubmit} id="addBtn" type="submit"><FaPlus/></button>
                </form>
            </div>
        </div>
        </div>
    );
};
export default CreateSkill;
