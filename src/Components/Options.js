import { useQuiz } from '../contexts/QuizContext';

export default function Options() {
  const { questions, dispatch, answer, index: questionIndex } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div>
      <div className="options">
        {questions[questionIndex].options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? 'answer' : ''} 
            ${hasAnswered ? (index === questions[questionIndex].correctOption ? 'correct' : 'wrong') : ''}`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
