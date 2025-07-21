import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import "./Signupstyle.css";


function Signuppage(){
      
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState(""); 

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
    function fullName(event){
      return(
        setName(event.target.value)
      )
    }


    const handleSignup = async (e) => {
        e.preventDefault(); 
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          await updateProfile(userCredential.user, {
            displayName: name,
          });
          alert("Signup successful!");
          setError(""); 
        } catch (err) {
          setError(err.message); 
        }
      };
      return (
        <div>
            <form onSubmit={handleSignup}>
            <input
              type="text"
              value={name}
              onChange={fullName}
              placeholder="Enter your name"
            />
            <input
                type="email"
                value={email}
                onChange={emailSet}
                placeholder="Enter email"
            />
            <input
                type="password"
                value={password}
                onChange={passwordSet}
                placeholder="Enter password"
            />
            <button type="submit">Sign Up</button>
            </form>

            {error && <p>{error}</p>} {/* show error if exists */}
        </div>
      )
    }

    export default Signuppage;
