import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { auth} from "../firebase";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Loginpage({ onLoginSuccess }){
      
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
    function erroeSet(event){
      return(
        setError(event.target.value)
      )
    }


    const handleLogin  = async (event) => {
        event.preventDefault(); 
        try {
          await signInWithEmailAndPassword(auth, email, password);
          alert("Login  successful!");
          // toast.warning(" Please enter a quiz prompt before generating.");
          
          setError(""); 
          if (onLoginSuccess) {
            toast.success("Login successfully!");
            onLoginSuccess(); 
          }
        } catch (err) {
          // setError(err.message);
          toast.error(err.message); 
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
                placeholder="email"
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

            {/* {error && <p style={{ color: "red" }}>{error}</p>} show error if exists */}
            <ToastContainer />
        </div>
      )
    }

    export default Loginpage;


    // email - harshitsingh123@gmail.com
    // password - harshit123
