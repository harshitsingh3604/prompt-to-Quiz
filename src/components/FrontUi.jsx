
import "./Frontuistyling.css"
import { useState } from 'react'
import axios from 'axios';

function FrontUi(){

     const [prompt, setPrompt] = useState("");             // To store quiz prompt
    const [language, setLanguage] = useState("English"); // Default language
    const [difficulty, setDifficulty] = useState("Easy"); // Default difficulty
    const [quiz, setQuiz] = useState("");                 // To store the generated quiz (empty for now)

    function promptValue(event ){
        return( 
            setPrompt(event.target.value)
        )
    }

    function languagetValue(event ){
        return( 
            setLanguage(event.target.value)
        )
    }

    function difficultyvalue(event ){
        return( 
            setDifficulty(event.target.value)
        )
    }
    function quizBox(event){
        return( 
            setQuiz(`Prompt: ${prompt}, Language: ${language}, Difficulty: ${difficulty}`)
        )
    }
    const handleGenerateQuiz = async () => {
        try {
          const response = await axios.post('http://localhost:3000/generate-quiz', {
            prompt,
          language,
           difficulty
          });
      
          setQuiz(JSON.stringify(response.data, null, 2)); // Save the quiz into your quiz state
        } catch (error) {
          console.error("Error generating quiz:", error);
          setQuiz("Failed to generate quiz.");
        }
      };
      

    return (
      
            <div className = "FrontUi">
                
                <input type="text" id = "promptbox" value={prompt}  onChange={promptValue} 
                placeholder="Enter your quiz prompt here..." ></input>
                <span className='dropDown'>
                <select className='option' value={language} onChange={languagetValue}>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
                    <select className='option' value={difficulty} onChange={difficultyvalue}>
                    <option value="Easy">Easy</option>
                    <option value="Meduim">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                </span>
                <input type="submit"  id = "generatequiz" value="Generate Quiz"
                onClick={handleGenerateQuiz}/>
                <textarea name="textBox" value={quiz} readOnly id="quizappear" cols="30" rows="10">your quiz appear here...</textarea>
            </div>
        
       
    )
    }

export default FrontUi;