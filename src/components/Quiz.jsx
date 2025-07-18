// import React, { useEffect, useState } from "react";
// import axios from "axios";


// function Quiz(){

//     const [questions, setQuestions] = useState([]);
//     const [current, setCurrent] = useState(0);
//     const [score, setScore] = useState(0);
//     const [finished, setFinished] = useState(false);
    
//     useEffect(() => {

//         axios.get("http://localhost:5000/api/quizdata")
//         .then((res) => {
//             const fetchedQuestions = res.data[0].questions; // access nested questions
//             setQuestions(fetchedQuestions);
//           })
//           .catch((err) => {
//             console.error("Error fetching quiz data:", err);
//           });
//     },[])

    
//   const handleAnswer = (selected) => {
//     if (selected === questions[current].answer) {
//       setScore(score + 1);
//     }
//     const next = current + 1;
//     if (next < questions.length) {
//       setCurrent(next);
//     } else {
//       setFinished(true);
//     }
//   };
//   if (questions.length === 0) return <div>Loading...</div>;
//   if (finished) return <div>Your score: {score} / {questions.length}</div>;


//     return(

//         <div>
//             <h3>Q{current + 1}: {questions[current].question}</h3>
//             {questions[current].options.map((opt, index) => (
//                 <button key={index} onClick={() => handleAnswer(opt)}>{opt}</button>
//             ))}
//         </div>

//     )
// }
// export default Quiz;