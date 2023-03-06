import React from "react";
import './skill-item.css'
import {MdDeleteForever} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'

function SkillItem({name, deleteSkill, id}) {

    return (
        <div id="head" className="mt-5">
            <div key={id} className="App-li">
                <h2>{name}</h2>
                <button id="delete" onClick={()=> deleteSkill(id)}><MdDeleteForever/></button> 
                <button id="edit"><AiFillEdit/></button>
            </div>
        </div>
    )
}

export default SkillItem