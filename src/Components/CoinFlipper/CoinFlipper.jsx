import { useState } from "react";
import Coin from "../Coin/Coin";

const CoinFlipper = () => {
  
  const [numFlips, setNumpFlips] = useState(0)
  const [numHeads, setNumHeads] = useState(0)
  const [numTails, setNumTails] = useState(0)
  const [side, setSide] = useState('https://tinyurl.com/react-coin-heads-jpg')
  

  const options = ['heads', 'tails']

  // let imgSrc

  function flipCoin() {
    setNumpFlips(numFlips + 1)
    let result = options[Math.floor(Math.random() * options.length)]
    if (result === 'heads') {
      setNumHeads(numHeads + 1)
      setSide('https://tinyurl.com/react-coin-heads-jpg')
    } else {
      setNumTails(numTails + 1)
      setSide('./assets/images/Kennedy-64r.jpg')
    }
  }

  const handleClick = (e) => {
    flipCoin()
  }

  return ( 
    <div>
      <h1>Let's flip a coin</h1>
      <Coin side={side}/>
      <button onClick={handleClick}>Flip Me!</button>
      <p>Out of {numFlips}, there have been {numHeads} heads and {numTails} tails</p>
    </div>
  );
}

export default CoinFlipper;