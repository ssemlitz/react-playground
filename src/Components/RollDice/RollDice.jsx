import Die from "../Die/Die";
import styles from './RollDice.module.css'
import { useState } from "react";

const RollDice = (props) => {
  const [die1, setDie1] = useState('one')
  const [die2, setDie2] = useState('one')
  const [rolling, setRolling] = useState(false)

  const numbers = ['one', 'two', 'three', 'four', 'five', 'six']
  
  const roll = (event) => {
    setRolling(true)
    
    setTimeout(() => {
      setDie1(numbers[Math.floor(Math.random() * numbers.length)])
      setDie2(numbers[Math.floor(Math.random() * numbers.length)])
      setRolling(false)
    }, 1000)
  }
  
  return ( 
    <div className={styles.RollDice}>
      <div>
        <Die num={die1} rolling={rolling}/>
        <Die num={die2} rolling={rolling}/>
      </div>
      <button onClick={roll} disabled={rolling}>{rolling ? 'Rolling...' : 'Roll Dice'}</button>
    </div>
  );
}

export default RollDice;