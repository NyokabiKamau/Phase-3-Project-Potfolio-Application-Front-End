import React, { useState } from "react";

import './create-skill.css'
// MAIN ----------------------
function CreateSkill() {
    const [inputText, setInputText] = useState(
        {
            name: ""
        }
    );
    const [items, setItems] = useState([]);

    // function handleSubmit(e){
    //     e.preventDefault();
    //     e.target.reset();
    //     fetch('http://127.0.0.1:9292/projects/create',
    //       {
    //         method:"POST",
    //         headers:{
    //           "Content-Type":"application/json",
    //           "Application":"application/json"
    //         },
    //         body:JSON.stringify(inputText)
    // })
    // .then(res=>res.json())
    // .then(data=>console.log(data))
    // .catch(console.error)
    // }

    const updateText = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() == "") return;
        setItems([...items, inputText]);
        setInputText("");
        console.log(items);
    };

    const handleDelete = (index) => {
        const newArr = [...items];
        newArr.splice(index, 1);
        setItems(newArr);
    };

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={handleSubmit}>
                    <input
                        className="App-input"
                        onChange={updateText}
                        value={inputText}
                        placeholder="I need to..."
                    />
                    <button className="App-submit">+</button>
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
