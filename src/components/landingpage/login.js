import React from "react";
import './login.css'

function Login() {

    function openRegister() {
        const element = document.getElementById('card')
        element.style.transform = "rotateY(-180deg)"
    }

    function openLogin() {
        const element = document.getElementById('card')
        element.style.transform = "rotateY(0deg)"
    }

    return (
        <div className="container-t">
            <div className="card-t">
                <div className="inner-box-t" id="card">
                    <div className="card-front-t">
                        <h2>LOGIN</h2>
                        <form>
                            <input type="email" className="input-box-t" placeholder="Your Email Id" required />
                            <input type="password" className="input-box-t" placeholder="Password" required />
                            <button type="submit" class="submit-btn">Submit</button>
                            <input type="checkbox"/><span>Remember</span>
                        </form>
                        <button type="button" className="btn" onClick={openRegister}>I'm New Here</button>
                        <a href="">Forget Password</a>
                    </div>
                    <div className="card-back-t">  <h2>REGISTER</h2>
                        <form>
                        <input type="text" className="input-box-t" placeholder="Your Name" required />
                            <input type="email" className="input-box-t" placeholder="Your Email Id" required />
                            <input type="password" className="input-box-t" placeholder="Password" required />
                            <button type="submit" class="submit-btn">Submit</button>
                            <input type="checkbox"/><span>Remember</span>
                        </form>
                        <button type="button" className="btn" onClick={openLogin}>I have an account</button>
                        <a href="">Forget Password</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login