import { useState } from 'react'
import './App.css'
import FrontUi from './components/FrontUi'

function App() {
  const [prompt, setPrompt] = useState("");         // To store quiz prompt
  const [language, setLanguage] = useState("English"); // Default language
  const [difficulty, setDifficulty] = useState("Easy"); // Default difficulty
  const [quiz, setQuiz] = useState("");                 // To store the generated quiz (empty for now)

  return (
    <>
      <div className = "wrapper">
        <h1> Prompt to Quiz Generator</h1>
        <FrontUi   prompt={prompt}
        setPrompt={setPrompt}
        language={language}
        setLanguage={setLanguage}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        quiz={quiz}
        setQuiz={setQuiz}></FrontUi>
      </div>
     
    </>
  )
}

export default App
