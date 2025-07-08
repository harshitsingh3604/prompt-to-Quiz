
import "./Frontuistyling.css"

function FrontUi({ prompt, setPrompt, language, setLanguage, difficulty, setDifficulty, quiz, setQuiz }){
    return (
      
            <div className = "FrontUi">
                
                <input type="text" id = "promptbox" value={prompt}  onChange={(event) => setPrompt(event.target.value)} 
                placeholder="Enter your quiz prompt here..." ></input>
                <span className='dropDown'>
                <select className='option' value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
                    <select className='option' value={difficulty}onChange={(e) => setDifficulty(e.target.value)}>
                    <option value="Easy">Easy</option>
                    <option value="Meduim">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                </span>
                <input type="submit"  id = "generatequiz" value="Generate Quiz"
                onClick={() => setQuiz(`Prompt: ${prompt}, Language: ${language}, Difficulty: ${difficulty}`)}/>
                <textarea name="textBox" value={quiz} readOnly id="quizappear" cols="30" rows="10">your quiz appear here...</textarea>
            </div>
        
       
    )
    }

export default FrontUi;