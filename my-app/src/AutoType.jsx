import React, { useState, useEffect } from "react";

const AutoType = ({ word, delay, infinite }) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (infinite) {
      interval = setInterval(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % word.length);
      }, delay);
    }

    return () => clearInterval(interval);
  }, [word, delay, infinite]);

  return <>{word[textIndex]}</>;
};

export default AutoType;
