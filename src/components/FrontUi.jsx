
import "./Frontuistyling.css"
import { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, getAuth } from "firebase/auth";
import { auth } from "../firebase";
import {  addDoc, Timestamp, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function FrontUi() {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("English");
  const [difficulty, setDifficulty] = useState("Easy");
  const [quiz, setQuiz] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState({});
  const [results, setResults] = useState({});
  const [quizHistory, setQuizHistory] = useState([]);
  const [score, setScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function promptValue(e) {
    setPrompt(e.target.value);
  }

  function languagetValue(e) {
    setLanguage(e.target.value);
  }

  function difficultyvalue(e) {
    setDifficulty(e.target.value);
  }

  const handleGenerateQuiz = async () => {
    setUserAnswer({});
    setResults({});
    setLoading(true);
    setScore(null);
    setIsSubmitted(false);

    if (!prompt.trim()) {
      toast.warning("Please enter a quiz prompt before generating.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/generate-quiz', {
        prompt,
        language,
        difficulty,
      });

      if (Array.isArray(response.data) && response.data.length > 0) {
        setQuiz(response.data);
        toast.success("Quiz generated successfully!");
        setError("");
      } else {
        setQuiz([]);
        toast.warning("No quiz found for the given prompt.");
      }
    } catch (error) {
      setError("Failed to generate quiz. Please try again later.");
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  const handleOptionClick = (option, questionObj, index) => {
    const isCorrect = questionObj.answer === option;

    setUserAnswer(prev => ({
      ...prev,
      [index]: option
    }));

    setResults(prev => ({
      ...prev,
      [index]: isCorrect ? "correct" : "wrong"
    }));

    const currentQuizResult = {
      question: questionObj.question,
      options: questionObj.options,
      userAnswer: option,
      correctAnswer: questionObj.answer,
      result: isCorrect ? "correct" : "wrong",
    };

    const history = JSON.parse(localStorage.getItem("quiz-history")) || [];
    history.push(currentQuizResult);
    localStorage.setItem("quiz-history", JSON.stringify(history));
  };

  function handleClearHistory() {
    localStorage.removeItem("quiz-history");
    setQuizHistory([]);
  }

  const calculateScore = async () => {
    let correctCount = 0;
    const updatedResults = {};

    if (Object.keys(userAnswer).length !== quiz.length) {
      toast.warning("Please answer all questions before submitting.");
      return;
    }

    quiz.forEach((q, index) => {
      if (results[index] === "correct") {
        correctCount++;
        updatedResults[index] = "correct";
      } else {
        updatedResults[index] = "wrong";
      }
    });

    setScore(correctCount);
    setResults(updatedResults);
    setIsSubmitted(true);

    const user = auth.currentUser;
    if (user) {
      const quizData = {
        uid: user.uid,
        name: user.displayName || "Anonymous",
        email: user.email || "No email",
        score: correctCount,
        total: quiz.length,
        timestamp: Timestamp.now(),
        details: quiz.map((q, index) => ({
          question: q.question,
          selected: userAnswer[index],
          correct: q.answer,
          result: updatedResults[index],
        }))
      };

      try {
        await addDoc(collection(db, "quizResults"), quizData);
        toast.success("Score saved to Firestore!");
      } catch (err) {
        console.error("Error saving score:", err);
        toast.error("Failed to save score.");
      }
    }
  };

  const handleViewFirestoreHistory = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      const q = query(collection(db, "quizResults"), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setQuizHistory(results);
    } catch (err) {
      console.error("Error fetching past results:", err);
      toast.error("Failed to load quiz history.");
    }
  };

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
    <div className="FrontUi">
      <h1>Prompt to Quiz</h1>

      <input
        type="text"
        id="promptbox"
        value={prompt}
        onChange={promptValue}
        placeholder="Enter your quiz prompt here..."
      />
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
      <input
        type="submit"
        id="generatequiz"
        value={loading ? "Loading..." : "Generate Quiz"}
        onClick={handleGenerateQuiz}
        disabled={loading}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="quiz-display">
        {quiz.length > 0 ? (
          <div>
            <div className="language-button">
              <span><strong>Language:</strong> {language}</span>
              <span><strong>Difficulty:</strong> {difficulty}</span>
            </div>

            {quiz.map((q, i) => (
              <div key={i} className="question-block">
                <p className="quiz-question"><strong>Q{i + 1}:</strong> {q.question}</p>
                <div className="quiz-options">
                  {q.options.map((option, j) => {
                    const isSelected = userAnswer[i] === option;
                    const isCorrectAnswer = q.answer === option;
                    const isUserWrongAnswer = isSelected && !isCorrectAnswer;
                    let className = "option";

                    if (isSubmitted) {
                      if (isCorrectAnswer) className += " correct";
                      else if (isUserWrongAnswer) className += " wrong";
                    }

                    return (
                      <label key={j} className={className}>
                        <input
                          type="radio"
                          name={`question-${i}`}
                          value={option}
                          checked={isSelected}
                          onChange={() => handleOptionClick(option, q, i)}
                          disabled={isSubmitted}
                        />
                        {option}
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="storage">
              <button className="history-button" onClick={handleViewFirestoreHistory}>History</button>
              <button className="history-clear-button" onClick={handleClearHistory}>Clear History</button>
            </div>
          </div>
        ) : (
          <p>Your quiz will appear here...</p>
        )}
      </div>

      {quiz.length > 0 && (
        <div className="score-section">
          <button onClick={calculateScore} className="submit-button" disabled={isSubmitted}>
            Submit Quiz
          </button>
          {score !== null && (
            <p className="score-text">Your Score: {score} / {quiz.length}</p>
          )}
        </div>
      )}

      {quizHistory.length > 0 && (
        <div className="quiz-history">
          <h3>Quiz History</h3>
          {quizHistory.map((item, index) => (
            <div key={index} className="history-item">
              <p>Score: {item.score} / {item.total}</p>
              <p>Date: {item.timestamp?.toDate().toLocaleString()}</p>
              {item.details && item.details.map((d, i) => (
                <div key={i}>
                  <p>Q{i + 1}: {d.question}</p>
                  <p>Your Answer: {d.selected}</p>
                  <p>Correct Answer: {d.correct}</p>
                  <p>Result: {d.result}</p>
                  <hr />
                </div>
              ))}
              <hr />
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
  );
}

export default FrontUi;
