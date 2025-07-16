import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";



function Signuppage(){
      
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    const handleSignup = async (e) => {
        e.preventDefault(); 
        try {
          await createUserWithEmailAndPassword(auth, email, password);
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
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
            />
            <button type="submit">Sign Up</button>
            </form>

            {error && <p>{error}</p>} {/* show error if exists */}
        </div>
      )
    }

    export default Signuppage;
