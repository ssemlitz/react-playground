import { useState } from "react";

const BrokenClick = () => {
  const [num, setNum] = useState(0)
  
  const handleClick = (event) => {
    setNum(Math.floor(Math.random() * 10))
  }

  return ( 
    <div>
      <h1>Your number is {num}</h1>
        {num === 7 ? <h1>You Win!</h1> :<button onClick={handleClick}>Random Number</button>}
    </div>
  );
}

export default BrokenClick;