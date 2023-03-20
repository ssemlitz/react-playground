

const Joke = ({joke}) => {
  return ( 
    <div>
      <div>
        <button>-</button>
        <h4>{joke.votes}</h4>
        <button>+</button>
      </div>
      <h4>{joke.joke}</h4>
    </div>
  );
}

export default Joke;