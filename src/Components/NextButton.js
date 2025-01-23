import { useQuiz } from '../contexts/QuizContext';

export default function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return;

  return (
    <button
      className="btn btn-ui"
      onClick={() => {
        dispatch({
          type:
            index < numQuestions - 1
              ? 'nextQuestion'
              : index === numQuestions - 1 && 'finished',
        });
      }}
    >
      {index < numQuestions - 1
        ? 'Next'
        : index === numQuestions - 1 && 'Finish'}
    </button>
  );
}
