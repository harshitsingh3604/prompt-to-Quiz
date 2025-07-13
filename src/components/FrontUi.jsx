
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
    const [quizHistory, setQuizHistory] = useState([]);


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
    function handleViewHistory() {
        const storedHistory = JSON.parse(localStorage.getItem("quiz-history")) || [];
        setQuizHistory(storedHistory);
      }
      
      
    const handleGenerateQuiz = async () => {
        setUserAnswer("");
        setResult("");
        setLoading(true); 
        console.log("loading...");
        try {
            const response = await axios.post('http://localhost:3000/generate-quiz', {
            prompt,
            language,
           difficulty,
          });
      
        //   setQuiz(JSON.stringify(response.data, null, 2)); // Save the quiz into your quiz state
        setQuiz(response.data); 
        setError("");
        } 
        catch (error) {
          setError("Failed to generate quiz. Please try again later.");
          setQuiz(null);
        }
        setLoading(false);
      };

      const handleOptionClick = (option) => {
        setUserAnswer(option);
        if (quiz.answer === option) {
            setResult("correct");
        } else {
            setResult("wrong");
        }
        setResult(option === quiz.answer
             ? "correct" : "wrong");
        const currentQuizResult = {
            question: quiz.question,
            options: quiz.options,
            userAnswer: option,
            correctAnswer: quiz.answer,
            result: option === quiz.answer ? "Correct" : "wrong",
          };

          let history = JSON.parse(localStorage.getItem("quiz-history")) || [];
          history.push(currentQuizResult);
          localStorage.setItem("quiz-history", JSON.stringify(history));
        };
        function handleClearHistory() {
            localStorage.removeItem("quiz-history");  
            setQuizHistory([]);                      
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
                       disabled={!!result} // disable selection after answering
                     />
                     {option}
                   </label>
                        ))}
                        </div>

              {result && (
              <p className={`result-text ${result === 'correct' ? 'correct' : 'wrong'}`}>Result: {result === 'correct' ? 'Correct ✅' : 'Wrong ❌'}</p>
            )}
            <div className="storage">
                <button className="history-button" onClick={handleViewHistory}>History</button>
                <button className="history-clear-button" onClick={handleClearHistory}>Clear History</button>
            </div>

                    </>
                ) : (
                    <p>Your quiz will appear here...</p>
                )}
            </div>
            {quizHistory.map((item, index) => (
            <div className="quiz-history">
                <h3>Quiz History</h3>
                <div key={index} className="history-item">
                    <p> Question : {item.question}</p>
                    <p> Your Answer : {item.userAnswer}</p>
                    <p> Correct Answer : {item.correctAnswer}</p>
                    <p> Result : {item.result}</p>
                </div>
            </div>                  
            ))}

            </div>
        
       
    )
    }

export default FrontUi;