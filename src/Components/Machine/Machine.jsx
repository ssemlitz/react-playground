import {React, useState, useEffect} from 'react'

const Machine = ({ s1, s2, s3 }) => {
  
  const [row, setRow] = useState([s1,s2,s3])
  
  function onClick(event) {
    const fruits = ['🍒', '🍊', '🍋']
    s1 = fruits[Math.floor(Math.random() * fruits.length)]
    s2 = fruits[Math.floor(Math.random() * fruits.length)]
    s3 = fruits[Math.floor(Math.random() * fruits.length)]
    return (
      setRow([s1,s2,s3])  
    )
  }
  useEffect(()=>{
    
  }, [setRow])
  
  const winner = (s1 === s2) && (s2 === s3);
  
  return (
    <div>
      <p>{s1} {s2} {s3}</p>
      <p>{winner ? 'Winner!' : 'Loser!'}</p>
      <button onClick={onClick}>Spin</button>
    </div>
  )  
}

export default Machine;