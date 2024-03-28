import './Signup.css'
import React, { useState } from 'react';
import {Link, useNavigate  } from "react-router-dom";
import {Register} from "../../Service/Login/LoginService";
// import { BiEyeFill, BiEyeSlashFill } from 'bootstrap-icons/react';
const Signup = () =>{
    const navigate = useNavigate ();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let user ={email, password}
    const handleSignup = () => {
        Register(user).then(resp =>{
            console.log(resp.status);
            navigate("/login")
        }).catch(error =>{
            console.log(error);
            navigate("/sign-up")
        })
    };

    return(
        <div>
            {/*<body>*/}
            <section className={"section"}>
                <div></div>
                <div></div>
                <div></div>
                <div className="login">
                    <h2>Register</h2>
                    <div className="box">
                        <label>Username</label>
                        <div>
                            <i className="bi bi-person"></i>
                            <input type="text" placeholder="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                    </div>
                    <div className="box">
                        <label>Email</label>
                        <div>
                            <i className="bi bi-envelope"></i>
                            <input type="text" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="box">
                        <label>Password</label>
                        <div>
                            <i className="bi bi-lock"></i>
                            <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <i className="bi bi-eye-fill"></i>
                        </div>
                    </div>
                    <div className="log-reg">
                        <p>Sing In Using</p>
                        <Link to="/login"><span>Login</span></Link>
                    </div>
                    <button onClick={handleSignup}>Login</button>
                </div>
            </section>
        </div>
    )
}
export default Signup
