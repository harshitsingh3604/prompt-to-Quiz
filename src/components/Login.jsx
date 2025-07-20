import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";



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
        <div>
            <form onSubmit={handleLogin} className = "login-page">
              <h2>Welcome To Login Page</h2>
              <div className="login-page-body">
              <input
                type="email"
                value={email}
                onChange={emailSet}
                placeholder="Enter your email"
                required
                />
                <input
                    type="password"
                    value={password}
                    onChange={passwordSet}
                    placeholder="Enter password"
                    required
                />
                <button type="submit">Login</button>
              </div>
            </form>

            
           
        </div>
      )
    }

    export default Loginpage;