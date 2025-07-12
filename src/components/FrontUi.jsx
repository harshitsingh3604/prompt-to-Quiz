
import "./Frontuistyling.css"
import { useState } from 'react'
import axios from 'axios';
// import { normalizeModuleId } from "vite/module-runner";

function FrontUi(){

    const [prompt, setPrompt] = useState("");                 // To store quiz prompt
    const [language, setLanguage] = useState("English");     // Default language
    const [difficulty, setDifficulty] = useState("Easy");    // Default difficulty
    const [quiz, setQuiz] = useState(null);                  // To store the generated quiz (empty for now)
    const [error, setError] = useState("");                  // Error Handliing
    const [loading, setLoading] = useState(false);           //  Shows Loading State 
    const [userAnswer, setUserAnswer] = useState("");        // to store what user clicked
    const [result, setResult] = useState("");               // to store whether it's correct or wrong


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
      
    const handleGenerateQuiz = async () => {
        setUserAnswer("");
        setResult("");
        setLoading(true); 
        console.log("loading...");
        try {
            //  setLoading( true)
            const response = await axios.post('http://localhost:3000/generate-quiz', {
            prompt,
            language,
           difficulty,
          });
      
        //   setQuiz(JSON.stringify(response.data, null, 2)); // Save the quiz into your quiz state
        setQuiz(response.data); 
        setError("");
        } catch (error) {
          setError("Failed to generate quiz. Please try again later.");
        //   console.error("Error generating quiz:", error);
          setQuiz("Failed to generate quiz.");
        }
        setLoading(false);
      };

      function handleOptionClick(option) {
        setUserAnswer(option);
        if (quiz.answer === option) {
            setResult("correct");
        } else {
            setResult("wrong");
        }
    }
    
      

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
                <input type="submit"  id = "generatequiz" value = {loading ? "Loading..." : "Generate Quiz"}
                onClick={handleGenerateQuiz}  disabled={loading}/>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {/* <textarea name="textBox" value={quiz && quiz.question
                    ? language + "\n" + difficulty + "\n" + quiz.question + "\n" + {quiz.options.map((option, index) => (
                        <button key={index} onClick={() => handleOptionClick(option)}>
                           {option}
                        </button>
                     ))}
                     
            : "Your quiz will appear here..."} readOnly id="quizappear"
                 cols="30" rows="10">your quiz appear here...</textarea> */}
                 <div className="quiz-display">
                {quiz && quiz.question ? (
                    <>
                        <span><strong>Language:</strong> {language}</span>
                        <span><strong>Difficulty:</strong> {difficulty}</span>
                        <p className="quiz-question"><strong>Question:</strong> {quiz.question}</p>

                        <div className="quiz-options">
                           {quiz.options.map((option, index) => (
                     <label key={index} className="option-label">
                     <input
                       type="radio"
                       name="quiz-option"
                       value={option}
                       checked={userAnswer === option}
                       onChange={() => handleOptionClick(option)}
                    //    disabled={!!result} // disable selection after answering
                     />
                     {option}
                   </label>
                        ))}
                        </div>

              {result && (
              <p className={`result-text ${result === 'correct' ? 'correct' : 'wrong'}`}>Result: {result === 'correct' ? 'Correct ✅' : 'Wrong ❌'}</p>
            )}
                    </>
                ) : (
                    <p>Your quiz will appear here...</p>
                )}
            </div>

            </div>
        
       
    )
    }

export default FrontUi;