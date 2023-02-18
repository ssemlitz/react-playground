import { useState } from "react";

const ScoreKeeper = () => {
  const [score, setScore] = useState(0)
  
  const singleKill = (e) => {
    setScore(score + 1)
  }
  const tripleKill = (e) => {
    setScore(score + 3)
  }

  return ( 
    <div>
      <h1>Score is: {score}</h1>
      <button onClick={singleKill} >single</button>
      <button onClick={tripleKill} >triple</button>
    </div>
  );
}

export default ScoreKeeper;