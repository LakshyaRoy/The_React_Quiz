import React from "react";

const Progress = ({
  index,
  points,
  maxPossiblePoints,
  numQuestions,
  answer,
}) => {
  console.log("Progress:", index);
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <p>{`Question ${index + 1} / ${numQuestions}`}</p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
