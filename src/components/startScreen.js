import React from "react";

const startScreen = ({ numQuestions, dispatch }) => {
  // console.log(numQuestions);
  return (
    <div className="start">
      <h2>Welcome to React Quiz!</h2>
      <h3>{numQuestions} Questions To test your knowledge.</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
};
export default startScreen;
