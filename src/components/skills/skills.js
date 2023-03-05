import React, { useEffect, useState } from "react";
import SkillItem from "./skill-item";
import './skills.css'

const SKILL_API = "http://127.0.0.1:9292/skills"

function Skill({}) {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        fetch(SKILL_API)
            .then(response => response.json())
            .then(data => {
                setSkills(data)
                console.log(data)
            })
    }, [])
    
    function deleteSkill(id){
        fetch(`http://127.0.0.1:9292//skills/destroy/${id}`,{
          method: "DELETE"
        })
        .then(()=>{
            setSkills((data) => data.filter((item) => item.id !== id))
        })
    }

    const list = skills.map((skill) => {
        return (
            <SkillItem 
            key={skill.id}
            name={skill.name}
            id={skill.id}
            deleteSkill={deleteSkill}
            />
        )
    } )

    return (
        <div> 
            <h1>Skills</h1>
            <div>
                {list}
            </div>
            
        </div>
    )
}

export default Skill