export default function NextButton({ dispatch, answer, index, numQuestions }) {
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
