export const FeedbackOptions = ({ buttons, onLeaveFeedback }) => {
  return (
    <div>
      {buttons.map((button, id) => {
        return (
          <button
            key={id}
            type="button"
            name={button}
            onClick={onLeaveFeedback}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};
