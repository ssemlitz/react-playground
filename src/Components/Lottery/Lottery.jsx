import { useState } from 'react';
import styles from './Lottery.module.css'
import LottoBall from '../LottoBall/LottoBall';

const Lottery = ({title='Lotto', numBalls=6, maxNum=40}) => {
  const [nums, setNums] = useState(Array.from({length: numBalls}))
  
  function generate() {
    setNums([...nums.map(n => Math.floor(Math.random() * maxNum) + 1)])
  }

  const handleClick = (e) => {
    generate()
  }

  return ( 
    <div className={styles.Lottery}>
      <h1>{title}</h1>
      <div>
        {nums.map(n => (
          <LottoBall num={n}/>
        ))}
      </div>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

export default Lottery;