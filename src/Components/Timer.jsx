import React, { useEffect, useState } from "react";

const Timer = ({ seconds, setIsRoundStart }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return <>00:{timeLeft < 10 ? "0" + timeLeft : timeLeft}</>;
};

export default Timer;
