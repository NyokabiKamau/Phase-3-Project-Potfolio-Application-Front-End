import React from "react";
import CreateProject from "../add-project/create-project";
import CreateSkill from "../add-skill/create-skill";


function Home() {
    return (
        <div>
            
            <div className="mt-5">
                <ul className="mt-5">
                    <ol>
                        <h2 className="ms-5">Add a Skill or Project to update it to your list.</h2>

                    </ol>
                    <ol>
                        <h2 className="ms-5">Click on the link on the Navbar to view the updated list.</h2>
                    </ol>
                </ul>
            <CreateSkill />
            <CreateProject/>
            </div>
            
        </div>
    )
}

export default Home