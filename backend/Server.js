const express = require('express')
const cors = require('cors')
const quizData = require('./quizData.js');
require('dotenv').config();
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


app.get('/test', (req, res) => {
  res.send('harshit singh ')
})

// app.post('/generate-quiz', async (req, res) => {
//     const { prompt, language, difficulty } = req.body;
//       await new Promise(resolve => setTimeout(resolve, 1000));
  
//     // Mock quiz result
//     const quiz = {
//       question: `What is JavaScript?`,
//       options: ["Programming Language" , "Car" , "Fruit" , "Toy"],
//       answer: "Programming Language",
//       language,
//       difficulty,
//     };
//     res.json(quiz);
//   });
  
app.post('/generate-quiz', (req, res) => {
  const { prompt, language, difficulty } = req.body;
  console.log("Received:", prompt, language, difficulty);
  const quiz = quizData.find((q) =>
    prompt.toLowerCase().includes(q.topic.toLowerCase()) &&
    q.language === language &&
    q.difficulty === difficulty
  );

  if (quiz) {
    console.log("MATCHED QUIZ:", quiz);

    res.json(quiz.questions);
  } else {
    res.status(200).json([]);
    // res.status(404).json({ error: "No matching quiz found" });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
