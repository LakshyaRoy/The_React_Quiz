import React, { useEffect } from "react";

const Timer = ({ dispatch, SecondsRemaining }) => {
  const min = Math.floor(SecondsRemaining / 60);
  const sec = SecondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </div>
  );
};

export default Timer;
