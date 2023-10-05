import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🎉";
  if (percentage > 80 && percentage < 100) emoji = "🤩";
  if (percentage > 60 && percentage < 80) emoji = "🤔";
  if (percentage > 0 && percentage < 60) emoji = "🤨";
  if (percentage === 0) emoji = "😕";

  return (
    <div>
      <h3 className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.round(percentage)}% )
      </h3>
      <p className="highscore"> {`Highscore: ${highscore} points.`} </p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default FinishScreen;
