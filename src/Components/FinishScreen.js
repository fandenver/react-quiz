export default function FinishedScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 100) emoji = '🥇';
  if (percentage >= 70 && percentage < 100) emoji = '🥈';
  if (percentage >= 30 && percentage < 70) emoji = '🥉';
  if (percentage < 30) emoji = '😿';

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{' '}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart', payload: highscore })}
      >
        Restart quiz
      </button>
    </>
  );
}
