import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Joke from "./Joke";
import './JokeList.css'

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

  // useEffect(() => {
  //   const initialJokes = async () => {
  //     try {
  //       const newJokes = await Promise.all([...Array(10)].map(fetchJoke))
  //       setJokesArray(newJokes)
  //     } catch (error) {
  //       console.log('ERROR!: ', error)
  //       return "No jokes for you, sorry!"
  //     }
  //   }
  //   initialJokes()
  // }, [])

  useEffect(() => {
    const initialJokes = async () => {
      try {
        const newJokes = [];
        for (let i = 0; i < 10; i++) {
          setIsLoading(true)
          let joke = await fetchJoke();
          if (newJokes.some(newJoke => newJoke.id === joke.id )) {
            joke = await fetchJoke()
            newJokes.push(joke)
          } else {
            newJokes.push(joke)
          }
        }
        setIsLoading(false)
        setJokesArray(newJokes);
      } catch (error) {
        console.log('ERROR!: ', error);
        return 'No jokes for you, sorry!';
      }
    };
    initialJokes();
  }, []);

  const handleClick = async () => {
    let newJoke = await fetchJoke();
    if (jokesArray.some(joke => joke.id === newJoke.id )) {
      newJoke = await fetchJoke()
      setJokesArray([...jokesArray, newJoke])
    } else {
      setJokesArray([...jokesArray, newJoke])
    }
  }

  const jokesList = jokesArray.map((joke) => (
    <Joke 
      key={uuidv4()}
      joke={joke}
    />
  ))

  return ( 
    <div>
      <button onClick={() => handleClick()}>Add Joke</button>
      {isLoading ? <div className="loader"></div>: jokesList }
      
    </div>
  );
}

export default JokeList;