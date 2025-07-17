
import "./Frontuistyling.css"
import { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";




function FrontUi(){

    const [prompt, setPrompt] = useState("");                 // To store quiz prompt
    const [language, setLanguage] = useState("English");     // Default language
    const [difficulty, setDifficulty] = useState("Easy");    // Default difficulty
    const [quiz, setQuiz] = useState([]);                  // To store the generated quiz (empty for now)
    const [error, setError] = useState("");                  // Error Handliing
    const [loading, setLoading] = useState(false);           //  Shows Loading State 
    const [userAnswer, setUserAnswer] = useState({});        // to store what user clicked
    const [results, setResults] = useState({});               // to store whether it's correct or wrong
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
        setUserAnswer({});
        setResults({});
        setLoading(true); 
        if (!prompt.trim()) {
            toast.warning(" Please enter a quiz prompt before generating.");
            setLoading(false); 
            return; 
          }
          
        try {
            const response = await axios.post('http://localhost:3000/generate-quiz', {
            prompt,
            language,
           difficulty,
          });
      
        //   setQuiz(JSON.stringify(response.data, null, 2)); 
        // setQuiz(response.data); 
        // toast.success("Quiz generated successfully!");
        // setError("");
         // Defensive check
         if (Array.isArray(response.data) && response.data.length > 0) {
            setQuiz(response.data);
            toast.success("Quiz generated successfully!");
            setError("");
        } else {
            setQuiz([]);
            toast.warning("No quiz found for the given prompt.");
        }
        } 
        catch (error) {
          setError("Failed to generate quiz. Please try again later.");
          setQuiz([]);
          toast.error("Something went wrong!");
        }
        setLoading(false);
      };

      const handleOptionClick = (option, questionObj, index) => {
        // setUserAnswer(option);
        const key = `${index}-${option}`;
        setUserAnswer(key);
        // if (questionObj.answer === option) {
        //     setResult("correct");
        // } else {
        //     setResult("wrong");
        // }
        // setResult(option === quiz.answer
        //      ? "correct" : "wrong");
        const isCorrect = questionObj.answer === option;
        setResults(prev => ({
          ...prev,
          [index]: isCorrect ? "correct" : "wrong"
        }));
        const currentQuizResult = {
            question: questionObj.question,
            options: questionObj.options,
            userAnswer: option,
            correctAnswer: questionObj.answer,
            result: option === questionObj.answer ? "correct" : "wrong",
          };

          let history = JSON.parse(localStorage.getItem("quiz-history")) || [];
          history.push(currentQuizResult);
          localStorage.setItem("quiz-history", JSON.stringify(history));
        };
        function handleClearHistory() {
            localStorage.removeItem("quiz-history");  
            setQuizHistory([]);                      
          }


          const handleLogout = () => {
            signOut(auth)
              .then(() => {
                console.log("User signed out successfully.");
              })
              .catch((error) => {
                console.error("Error signing out:", error.message);
              });
          };
          

             

    return (
      
            <div className = "FrontUi">
              <h1>Prompt to Quiz</h1>
                

                <input type="text" id = "promptbox" value={prompt}  onChange={promptValue} 
                placeholder="Enter your quiz prompt here..." ></input>
                <span className='dropDown'>
                <select className='option' value={language} onChange={languagetValue}>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
                    <select className='option' value={difficulty} onChange={difficultyvalue}>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
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
                 {quiz.length > 0 ? (
  <div>
   <div className=" language-button">
   <span><strong>Language:</strong> {language}</span>
    <span><strong>Difficulty:</strong> {difficulty}</span>
   </div>

    {quiz.map((q, i) => (
      <div key={i} className="question-block">
        <p className="quiz-question"><strong>Q{i + 1}:</strong> {q.question}</p>
        <div className="quiz-options">
          {q.options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="radio"
                name={`quiz-option-${i}`}
                value={option}
                checked={userAnswer === `${i}-${option}`}
                onChange={() => handleOptionClick(option, q, i)}
              />
              {option}
            </label>
          ))}
        </div>
        {results[i] && (
                  <p className={`result-text ${results[i] === 'correct' ? 'correct' : 'wrong'}`}>
                    Result: {results[i] === 'correct' ? 'Correct ✅' : 'Wrong ❌'}
                  </p>
                )}
      </div>
    ))}
    
    <div className="storage">
      <button className="history-button" onClick={handleViewHistory}>History</button>
      <button className="history-clear-button" onClick={handleClearHistory}>Clear History</button>
    </div>
  </div>
) : (
  <p>Your quiz will appear here...</p>
)}

            </div>
            {quizHistory.length > 0 && (
  <div className="quiz-history">
    <h3>Quiz History</h3>
    {quizHistory.map((item, index) => (
      <div key={index} className="history-item">
        <p> Question : {item.question}</p>
        <p> Your Answer : {item.userAnswer}</p>
        <p> Correct Answer : {item.correctAnswer}</p>
        <p> Result : {item.result}</p>
      </div>
    ))}
  </div>
)}
    <div>
      <h1>Welcome to the App!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>

            <ToastContainer />

            </div>
        
       
    )
    }

export default FrontUi;