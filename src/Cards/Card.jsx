import { useState } from "react";
import './Card.css'

const Card = (props) => {
  
  const { name, img} = props

  const [transform, setTransform] = useState(() => {
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    return `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  });

  return ( 
    <img className="Card" src={img} alt={name} style={{transform}}/>
  );
}

export default Card;