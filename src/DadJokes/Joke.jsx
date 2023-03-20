import './Joke.css'
import { useState } from 'react';

const Joke = ({joke}) => {
  
  const [votes, setVotes] = useState(joke.votes)

  const handleClick = (amount) => {
    setVotes((prevVotes) => prevVotes + amount);
  };

  return ( 
    <div className="joke">
      <div className="voteBtns">
        <button onClick={() => handleClick(-1)}>-</button>
        <h4>{votes}</h4>
        <button onClick={() => handleClick(1)}>+</button>
      </div>
      <h4>{joke.joke}</h4>
    </div>
  );
}

export default Joke;