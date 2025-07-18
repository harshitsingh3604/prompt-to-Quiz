
import './App.css'
import FrontUi from './components/FrontUi'
import { useState } from "react";
import Loginpage from "./components/Login";
import Signuppage from "./components/Signup";
import {useEffect} from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import {app} from "./firebase"
import { getFirestore } from "firebase/firestore";
// import Quiz from "./components/Quiz"; 

function App() {

  const [user,setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const firestore = getFirestore(app);


  function signup (){
    return(
      setShowSignup (!showSignup)
    )
  }

  useEffect (() => {
    const unsubscribe = onAuthStateChanged(auth , (user)=> {
      if(user){
        setUser(user);
      }
      else{
        setUser(null);
      }
    })
    return () => unsubscribe();
  },[])

  if(user == null){
    return(
      <div className="auth-container">
        {showSignup ? (
          <Signuppage />
        ) : (
          <Loginpage />
        )}

        <button onClick={signup}>
          {showSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </button>
      </div>
    )

  }
  

  return (
    <div>
      <div className = "wrapper">
        <FrontUi></FrontUi>   
        {/* <Quiz />     */}
        </div> 
    </div>
  )
}

export default App
