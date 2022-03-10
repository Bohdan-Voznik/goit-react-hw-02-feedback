export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {total}</li>
      <li>Positive feedback: {positiveFeedback} %</li>
    </ul>
  );
};
