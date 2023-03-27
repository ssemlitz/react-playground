import './Joke.css'
import { useState } from 'react';

const Joke = ({joke, handleVote}) => {
  
  const [votes, setVotes] = useState(joke.votes)

  const handleClick = (amount) => {
    handleVote(joke.id, amount)
  }

  function getColor() {
    if (votes >= 15) {
      return "#4CAF50";
    } else if (votes >= 12) {
      return "#8BC34A";
    } else if (votes >= 9) {
      return "#CDDC39";
    } else if (votes >= 6) {
      return "#FFEB3B";
    } else if (votes >= 3) {
      return "#FFC107";
    } else if (votes >= 0) {
      return "#FF9800";
    } else {
      return "#f44336";
    }
  }



  function getEmoji() {
    if (votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (votes >= 12) {
      return "em em-laughing";
    } else if (votes >= 9) {
      return "em em-smiley";
    } else if (votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (votes >= 3) {
      return "em em-neutral_face";
    } else if (votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

  return ( 
    <div className="joke">
      <div className="voteBtns">
        <i className='voteBtn fa-sharp fa-solid fa-arrow-down' onClick={() => handleClick(-1)}></i>
        <div className='votes' style={{borderColor: getColor(), borderWidth: '3px'}}>
        {votes}
        </div>
        <i className='voteBtn fa-sharp fa-solid fa-arrow-up' onClick={() => handleClick(1)}></i>
      </div>
      <div className='joke-text'>{joke.joke}</div>
      <div className='emoji'>
        <i className={getEmoji()} />
      </div>
    </div>
  );
}

export default Joke;