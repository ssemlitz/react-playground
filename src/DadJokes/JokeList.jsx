import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Joke from "./Joke";

const JokeList = () => {
  
  // const [joke, setJoke] = useState([])
  const [jokesArray, setJokesArray] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  const api = 'https://icanhazdadjoke.com/'
    
  // async function fetchJokes() {
  //   try {
  //     let newJokes = []
  //     while (newJokes.length < 10) {
  //       const config = {headers: {Accept: 'application/json'}}
  //       const res = await axios.get(api, config)
  //       console.log('this is res', res.data);
  //       let newJoke = res.data
  //       newJokes.push(newJoke.joke)
  //       console.log('These are the newJokes', newJokes);
  //     }
  //     setJokes([...jokes, ...newJokes])
  //     console.log('************', jokes)
  //   } catch(error) {
  //     console.log('this is an error', error)
  //   }
  // }
  
  const fetchJoke = async () => {
    try {
      const config = { headers: { Accept: 'application/json' } }
      const res = await axios.get('https://icanhazdadjoke.com', config)
      let newJoke = res.data
      newJoke.votes = 0
      // setJoke(newJoke)
      return newJoke
      // console.log(newJoke)
    } catch (error) {
      console.log('ERROR!: ', error)
      return "No jokes for you, sorry!"
    }
  } 

  // useEffect(() => {
  //   const initialJokes = async () => {
  //     try {
  //       if (jokesArray?.length < 10) {
  //         for (let i = 0; i < 10 ; i++) {
  //           fetchJoke()
  //           setJokesArray([...jokesArray, joke])
  //         }
  //         console.log('**************',jokesArray)
  //     }
    
  //   } catch (error) {
  //       console.log('ERROR!: ', error)
  //       return "No jokes for you, sorry!"
  //     }
  //   }
  //   initialJokes()
  // }, [jokesArray])

  // const jokesList = jokesArray.map(joke => (
  //   <h1>{joke.joke}</h1>
  // ))

  useEffect(() => {
    const initialJokes = async () => {
      try {
        const newJokes = await Promise.all([...Array(10)].map(fetchJoke))
        setJokesArray(newJokes)
      } catch (error) {
        console.log('ERROR!: ', error)
        return "No jokes for you, sorry!"
      }
    }
    initialJokes()
  }, [])

  const jokesList = jokesArray.map(joke => (
    <Joke 
      key={uuidv4()}
      joke={joke}
    />
  ))

  return ( 
    <div>
      {jokesList}
    </div>
  );
}

export default JokeList;