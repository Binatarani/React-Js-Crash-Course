import React, { useEffect, useState } from "react";

const NextCount = () => {
  const [number, setNumber] = useState(2);
  const [click, setClick] = useState(0);

  useEffect(() => {
    setClick(() => click + 1);
  }, [number]);
  return (
    <div>
      <h2>Number: {number}</h2>
      <h2>Click:{click}</h2>
      <button onClick={() => setNumber(number * 2)}>Click Hear</button>
    </div>
  );
};

export default NextCount;
