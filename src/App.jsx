import { useState } from 'react'
import './App.css'
import FrontUi from './components/FrontUi'

function App() {
  //         // To store quiz prompt
  

  return (
    <>
      <div className = "wrapper">
        <h1> Prompt to Quiz Generator</h1>
         <FrontUi   /*prompt={prompt}} */
        ></FrontUi>
      </div>
     
    </>
  )
}

export default App
