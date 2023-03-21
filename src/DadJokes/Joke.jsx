import './Joke.css'
import { useState } from 'react';

const Joke = ({joke, handleVote}) => {
  
  const [votes, setVotes] = useState(joke.votes)

  const handleClick = (amount) => {
    handleVote(joke.id, amount)
  }

  return ( 
    <div className="joke">
      <div className="voteBtns">
        <i className='voteBtn fa-sharp fa-solid fa-arrow-down' onClick={() => handleClick(-1)}></i>
        <div className='votes'>
        {votes}
        </div>
        <i className='voteBtn fa-sharp fa-solid fa-arrow-up' onClick={() => handleClick(1)}></i>
      </div>
      <h4>{joke.joke}</h4>
    </div>
  );
}

export default Joke;