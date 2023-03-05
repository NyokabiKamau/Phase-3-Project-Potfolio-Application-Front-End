import './login.css'
import React, { useState } from "react"

function Login({setToken}) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    // 
    function openRegister() {
        const element = document.getElementById('card')
        element.style.transform = "rotateY(-180deg)"
    }

    function openLogin() {
        const element = document.getElementById('card')
        element.style.transform = "rotateY(0deg)"
    }

    function showingonLog(){
        const token = {
            email,
            password
        }
    setToken(token)
    }

    function showingonReg(){
        const token = {
            username,
            email,
            password
        }
    setToken(token)
    }

    let loginToken = {
        "email": email,
        "password_hash": password
    }


    let registerToken = {
        "name": username,
        "email": email,
        "password_hash": password
    }

    function handleEmail(e) {
        e.preventDefault()
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        e.preventDefault()
        setPassword(e.target.value)
    }

    function handleLoginBtn(e) {
        e.preventDefault()
        showingonLog()
        handleLogIn()
    }

    function handleRegisterBtn(e) {
        e.preventDefault()
        showingonReg()
        handleRegister()
    }

    function handleUser(e) {
        e.preventDefault()
        setUsername(e.target.value)
    }

    function handleRegister() {
        fetch('http://127.0.0.1:9292/auth/register',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerToken)
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

    const handleSubmitOfLog = e => {
        e.preventDefault()
        const token = {
            email,
            password
        }
        setToken(token)
    }

    const handleSubmitOfReg = e => {
        e.preventDefault()
        const token = {
            username,
            email,
            password
        }
        setToken(token)
    }

    return (
        <div>
            <div className="container-t">
                <div className="card-t">
                    <div className="inner-box-t" id="card">
                        <div className="card-front-t">
                            <h2>REGISTER</h2>
                            <form onSubmit={(e)=>handleRegister(e)}>
                                <input 
                                type="text" 
                                style={{color: "#FFFFFF"}}
                                value={username}
                                placeholder="Username"
                                className="input-box-t" required 
                                onChange={handleUser}
                                />
                                <input type="email" 
                                style={{color: "#FFFFFF"}} className="input-box-t" placeholder="Your Email" value={email} required onChange={handleEmail}/>

                                <input type="password"  style={{color: "#FFFFFF"}}  className="input-box-t" placeholder="Password" value={password} required onChange={handlePassword}/>

                                <button type="submit" className="submit-btn"  onClick={handleRegisterBtn}>Register</button>

                                <input type="checkbox"/><span>Remember</span>
                            </form>
                            <button type="button" className="btn" onClick={openRegister} >I have an account</button>
                            <a href="">Forget Password</a>
                        </div>

                        <div className="card-back-t">  <h2>LOGIN</h2>
                            <form onSubmit={handleSubmitOfLog}>
                                <input type="email" 
                                style={{color: "#FFFFFF"}}  className="input-box-t" placeholder="Your Email" value={email} required  onChange={handleEmail}/>

                                <input type="password" className="input-box-t" style={{color: "#FFFFFF"}}  placeholder="Password" value={password} required onChange={handlePassword}/>

                                <button type="submit" className="submit-btn"  onClick={handleLoginBtn}>Login</button>
                                <input type="checkbox"/><span>Remember</span>
                            </form>
                            <button type="button" className="btn" onClick={openLogin}>I'm New Here</button>
                            <a href="">Forget Password</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login