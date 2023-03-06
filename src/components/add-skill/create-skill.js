import React, { useState } from "react";
import '../add-project/create-project.css'


function CreateSkill () {

    const [name, setName] = useState([])
    const [user, setUser] = useState([])

   let addData = {
        "name" : name,
        "user_id": user
    }

    function handleName(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleUser(e){
        e.preventDefault()
        setUser(e.target.value)
    }


    function handleSubmit(e) {
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
         });
    }

   
    return (
        <div className="studentbackground">
        <div className="form" onSubmit={e => e.preventDefault()}>
            <h2>Add New Skill</h2>
            <div className="container">
                <form id="student-form">
                    <label>Skill Name</label>
                    <input
                    type="text"
                    style={{color: "#000000"}}
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleName}
                    />

                    <label>Skill User Id</label>
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
export default CreateSkill;
