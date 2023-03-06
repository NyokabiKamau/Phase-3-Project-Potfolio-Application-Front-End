import React, { useState } from "react"

function Authentication() {

    // const [log, setLog] = useState("")
    const [show,setShow] = useState('Show')
    const [mode, setmode] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("");

    let token = {
        "name": username,
        "email": email,
        "password_hash": password
    }

    let loginToken = {
        "email": email,
        "password_hash": password
    }

    const handleSubmit = () => {

    fetch('http://127.0.0.1:9292/auth/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(token)
    })

    }

    
    function handleLogIn(){

    fetch('http://127.0.0.1:9292/auth/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginToken)
        })
        .then(res => res.json())
        .then((data)=>{
        console.log(data)
        })
    }
    

    return (
        <div>
        <div className={`form-block-wrapper form-block-wrapper--is-`} onSubmit={(e)=> e.preventDefault()}></div>
        <section className={`form-block form-block--is-`}>
            <header className="form-block__header">
                <h1>{mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
                <div className="form-block__toggle-block">
                    <span>{mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                    <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
                    <label htmlFor="form-toggler"></label>
                </div>
            </header>
            {/* <LoginForm  /> */}
        </section>
    </div>
    )
}
export default Authentication

// name: "brady_sporer",
//  email: "nancy@kessler.io",
//  password_hash: "cjsQHUKkQWSQqBRW"