import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import styles from './Hangman.module.css'
import { useState } from "react";
import {randomWord} from './words'

const Hangman = (props) => {

  const { maxWrong } = props
  const images =[img0, img1, img2, img3, img4, img5, img6]

  const [nRight, setNRight] = useState(0)
  const [nWrong, setNWrong] = useState(0)
  const [guessed, setGuessed] = useState(new Set())
  const [answer, setAnswer] = useState(randomWord())
  // const answer = randomWord()
  

  function guessedWord() {
    return answer
      .split("")
      .map(ltr => (guessed.has(ltr) ? ltr : "_"));
  }


  const handleGuess = (evt) => {
    let ltr = evt.target.value;
    setGuessed(guessed.add(ltr))
    setNWrong(nWrong + (answer.includes(ltr) ? 0 : 1))
    setNRight(nRight + (answer.includes(ltr) ? 1 : 0))
    // this.setState(st => ({
    //   guessed: st.guessed.add(ltr),
    //   nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    // }));
  }

  function generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  const altText = `${nWrong}/${maxWrong} guesses`

  const handleReset = (evt) => {
    setNWrong(0)
    setNRight(0)
    setGuessed(new Set())
    setAnswer(randomWord)
  }

  return ( 
    <div className={styles.Hangman}>
      <h1>Hangman</h1>
        
        { nWrong < maxWrong ?
        <div>
          <img src={images[nWrong]} alt={nWrong} />
          <p>Number wrong: {nWrong}</p>
          <p className={styles.HangmanWord}>{guessedWord()}</p>
          <p className={styles.HangmanBtns}>{generateButtons()}</p>
          <button id={styles.HangmanReset} onClick={handleReset} >Reset</button>
        </div>
        : 
        <div>
          <p>You Lose!</p>
          <button id={styles.HangmanReset} onClick={handleReset} >Reset</button>
        </div>
        }
      </div>
  );
}

export default Hangman;