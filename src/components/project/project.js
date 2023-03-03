import React, { useEffect } from "react";

const PROJECT_API = "http://127.0.0.1:9292/projects"

function Profile() {

    useEffect(() => {
        fetch(PROJECT_API)
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }, [])
    

    return (
        <div>
            <h1>Profile</h1>

        </div>
    )
}

export default Profile