import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Prompt to Quiz Generator</h1>

        <div className = "FrontUi">
          
        <input type="text" id = "promptbox"
         placeholder="Enter your quiz prompt here..." ></input>
        <span className='dropDown'>
          <select className='option'>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
            <select className='option'>
            <option value="English">Easy</option>
            <option value="Hindi">Medium</option>
            <option value="cherry">Hard</option>
        </select>
      </span>
      <input type="submit"  id = "generatequiz" 
         value="Generate Quiz"/>

      {/* <input type="text" id = "quizappear"
           placeholder=" your quiz appear here..." ></input> */}

           <textarea name="textBox" id="quizappear" cols="30"
            rows="10">your quiz appear here...</textarea>
        



        </div>
      </div>
     
    </>
  )
}

export default App
