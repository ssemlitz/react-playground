import { useState } from "react";
import Rando from "../Rando/Rando";

const Game = (props) => {
  
  const [gameOver, setGameOver] = useState(false)

  return ( 
    <div>
      <h1>Your Score Is: <Rando maxNum={7}/></h1>
    </div>
  );
}

export default Game;