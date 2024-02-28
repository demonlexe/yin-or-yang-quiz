import './App.css';
import { questions } from './questions/questions';
import Question from './Question';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          questions.map((q, index) => <Question questionInfo={q} questionId={index} />)
        }
      </header>
    </div>
  );
}

export default App;
