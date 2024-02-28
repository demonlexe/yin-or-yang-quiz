import './App.css';
import { questions } from './questions/questions';
import Question from './Question';
import { useState } from 'react';

function App() {
  const [scoreArray, setScoreArray] = useState(Array(questions.length).fill(0));
  let score = 0;
  scoreArray.forEach(sc => score += sc)
  return (
    <div className="App">
      <header className="App-header">
        {
          questions.map((q, index) => <Question questionInfo={q} questionIndex={index} setScoreArray={setScoreArray} />)
        }
      </header>
      <div>
        <h4>Final Score:</h4>
        <p>{score}</p>
      </div>
    </div>
  );
}

export default App;
