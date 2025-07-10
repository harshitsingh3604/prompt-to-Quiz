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

app.post('/generate-quiz', (req, res) => {
    const { prompt, language, difficulty } = req.body;
      async() => await new Promise(resolve => setTimeout(resolve, 3000));
  
    // Mock quiz result
    const quiz = {
      question: `Your question appear here: ${prompt}`,
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: "Option 1",
      language,
      difficulty,
    };
    res.json(quiz);
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
