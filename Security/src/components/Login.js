import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    // Hook in Function component - useState Hook
    const [uname, setUname] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();

    const login = () => {
     //   alert(uname + " " + pwd);
     if(uname == "admin" && pwd == "admin123"){
        navigate("/home");
     }else{
        alert("please verify Credentials ! ! ! ")
       }
     }
    

    return (
        <>
            <div id="login-div">
                <h2>Login</h2>
                Username <input type="text" onChange={ (event) => setUname(event.target.value)} /> <br /> <br />
                Password <input type="password" onChange={(event) => setPwd(event.target.value)} /> <br /> <br />
                <button onClick={login}>Login</button> <br /> <br />
                <Link to="/signup">Not yet Registered??</Link>
                <Link to="/login">Sign Up</Link> {/* Corrected from <a Link="login">Sign Up</a> */}
            </div>
        </>
    );
};

export default Login;
