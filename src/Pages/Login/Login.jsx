import './Login.css'
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {LoginUser} from "../../Service/Login/LoginService";
import {AuthContext} from "../../Context/AuthContext";
// import { BiEyeFill } from 'bootstrap-icons/react';
const Login = () =>{
    const { setIsLoggedIn  } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let user ={email, password}
    const handleSignup = () => {
        LoginUser(user).then(resp =>{
            console.log(resp);
            console.log("Dang nhap thanh cong");
            navigate("/shop");
            setIsLoggedIn(true);
        }).catch(error => {
            console.log("Dawng nhap that bai");
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
                <h2>Login</h2>
                {/*<div className="box username">*/}
                {/*    <label>Username</label>*/}
                {/*    <div>*/}
                {/*        <i className="bi bi-person"></i>*/}
                {/*        <input type="text" placeholder="Username" id="username"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
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
                            {/*<BiEyeFill className="bi bi-eye-fill"></BiEyeFill>*/}
                            {/*<i className="bi bi-eye-fill"></i>*/}
                    </div>
                </div>
                <div className="log-reg">
                    <p>Sing Up Using</p>
                    <Link to="/sign-up"><span>Register</span></Link>
                </div>
                <button onClick={handleSignup}>Login</button>
            </div>
        </section>
        </div>
    )
}
export default Login
