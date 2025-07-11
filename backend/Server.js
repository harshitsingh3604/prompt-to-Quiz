const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
require('dotenv').config();

app.use(express.json());
app.use(cors())

app.get('/test', (req, res) => {
  res.send('harshit singh ')
})

app.post('/generate-quiz', async (req, res) => {
    const { prompt, language, difficulty } = req.body;
      await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Mock quiz result
    const quiz = {
      question: `What is JavaScript?`,
      options: ["Programming Language" , "Car" , "Fruit" , "Toy"],
      answer: "Programming Language",
      language,
      difficulty,
    };
    res.json(quiz);
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
