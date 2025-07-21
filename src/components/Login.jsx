import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import "./Loginstyle.css";
<link href='https://cdn.boxicons.com/fonts/basic/boxicons.min.css' rel='stylesheet'></link>



function Loginpage({ onLoginSuccess }){
      
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    function emailSet(event){
         return(
          setEmail(event.target.value)
         )
    }
    function passwordSet(event){
      return(
        setPassword(event.target.value)
      )
    }
   
    


    const handleLogin  = async (event) => {
        event.preventDefault(); 
        try {
          await signInWithEmailAndPassword(auth, email, password);
          alert("Login Successfullty")
          setTimeout(() => {
            if (onLoginSuccess) {
              
              onLoginSuccess();
            }
          }, 2000);
        } catch (err) {
           
          alert(" Login Failed: "+ err.message)
        }
      };
      
      return (
        <div className="body">
          <div className="login-container">
            <div className = "form-box-login">
              <form onSubmit={handleLogin} >
                <h1>Login </h1>
                
                  <div className="login-box">
                    <input
                    type="email"
                    value={email}
                    onChange={emailSet}
                    placeholder="Enter your email"
                    required
                    />
                    <i class="bx bx-user" />
                  </div>
                  <div className="login-box">
                    <input
                        type="password"
                        value={password}
                        onChange={passwordSet}
                        placeholder="Enter password"
                        required
                    />
                    <i class="bx bx-lock" />
                  </div>
                  <button type="submit" className="button">Login</button>
              </form>   
            </div>
        </div>
        </div>
      )
    }

    export default Loginpage;