import React, { useState } from "react";

import './create-skill.css'

function CreateSkill() {
    const [name, setName] = useState([])
    const [user, setUser] = useState([])
    const [items, setItems] = useState([])

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

    const handleDelete = (index) => {
        const newArr = [...items];
        newArr.splice(index, 1);
        setItems(newArr);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2>Add New Skill</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        className="App-input"
                        style={{color: "#000000"}}
                        onChange={handleName}
                        value={name}
                        placeholder="I need to..."
                    />
                    <input
                        className="App-input"
                        style={{color: "#000000"}}
                        onChange={handleUser}
                        value={user}
                        placeholder="User Id"
                    />
                    <button onClick={handleSubmit}className="App-submit">+</button>
                </form>
                <div className="App-li-wrapper">
                    {items.length === 0 ? (
                        <p>Currently no todos.</p>
                    ) : (
                        <TodoList todoItems={items} onDelete={handleDelete} />
                    )}
                </div>
            </header>
        </div>
    );
}

const TodoList = (props) => {
    const todoItems = props.todoItems.map((todoItem, index) => {
        return (
            <TodoItem
                content={todoItem}
                key={index}
                onDelete={props.onDelete}
            />
        );
    });

    return <ul>{todoItems}</ul>;
};

const TodoItem = (props) => {
    return (
        <div className="App-li">
            {props.content}
            <button
                className="App-li-delete"
                onClick={() => props.onDelete(props.key)}
            >
                &#10006;
            </button>
        </div>
    );
};


export default CreateSkill
