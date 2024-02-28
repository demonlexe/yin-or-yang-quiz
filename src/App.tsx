import './App.css';
import { partnerQuestions, questions } from './questions/questions';
import Question from './Question';
import { useState } from 'react';
import shuffle from './utils/shuffle';

const randomizedQuestions = shuffle(questions)
const randomizedPartnerQuestions = shuffle(partnerQuestions)

function App() {
  const [scoreArray, setScoreArray] = useState(Array(randomizedQuestions.length).fill(0));
  const [partnerScoreArray, setPartnerScoreArray] = useState(Array(randomizedPartnerQuestions.length).fill(0));
  let score = 0;
  scoreArray.forEach(sc => score += sc)
  partnerScoreArray.forEach(sc => score += sc)
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div>
        {
          randomizedQuestions.map((q, index) => <Question questionInfo={q} id="normal" questionIndex={index} setScoreArray={setScoreArray} />)
        }
      </div>
      <div>
        {
          randomizedPartnerQuestions.map((q, index) => <Question questionInfo={q} id="partner" questionIndex={index} setScoreArray={setPartnerScoreArray} />)
        }
      </div>
      <div>
        <h4>Final Score:</h4>
        <p>{score}</p>
      </div>
    </div>
  );
}

export default App;
