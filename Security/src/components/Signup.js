import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";

function SignUp(){
    // Hook
    const [uname,setUname] = useState("");
    const [pwd,setPwd] = useState("");
// POST API using axios
    const register = () => {
        // alert(uname + " " + pwd);
        const data = {
                email:uname,
                password:pwd
            }           
        
        axios.post("http://localhost:5000/api/users/",data)
        .then(res => {
            console.log(res);
            alert("User Added Successfully !!! ");
        })

    }

    return(
        <div id="signup-div">
            <h2> Sign Up </h2>
            Username: <input type="text" value={uname} 
                    onChange={(event) => setUname(event.target.value)}/> 
                    
                    <br /> <br />

            Password: <input type="password" value={pwd} 
                    onChange={(event) => setPwd(event.target.value)} />
                    
                     <br /> <br />
            {/* OnClick Event */}
            <button onClick={register}>Sign Up</button> <br /> <br />
            <Link id="ln" to="/login"> Already Registred !!! Login </Link>
        </div>
    )
}

export default SignUp