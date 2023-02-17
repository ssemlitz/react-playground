import { useState } from "react";

const Clicker = () => {
  const [num, setNum] = useState(1)
  
  const handleClick = (event) => {
    setNum(Math.floor(Math.random() * 10) + 1)
  }

  let isWinner = num === 7 
  ? <h1>You Win!</h1> 
  : <button onClick={handleClick}>Random Number</button>

  return ( 
    <div>
      <h1>Your number is {num}</h1>
      {isWinner}
    </div>
  );
}

export default Clicker;