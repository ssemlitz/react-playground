import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Joke from "./Joke";

const JokeList = () => {
  

  const [jokes, setJokes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const api = 'https://icanhazdadjoke.com/'
    
  async function fetchJokes() {
    try {
      let newJokes = []
      while (newJokes.length < 10) {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get(api, config)
        console.log('this is res', res.data.joke);
        let newJoke = res.data.joke
        newJokes.push(newJoke)
        console.log('These are the newJokes', newJokes);
      }
      setJokes([...jokes, ...newJokes])
      console.log('************', jokes)
    } catch(error) {
      console.log('this is an error', error)
    }
  }

  useEffect(() => {
    if (jokes.length === 0) {
      fetchJokes()
    }
  }, [])

  const jokesList = jokes.map(joke => (
    <h1>{joke}</h1>
  ))

  return ( 
    <div>
      {jokesList.map(()=>(
        <Joke />
      ))}
    </div>
  );
}

export default JokeList;