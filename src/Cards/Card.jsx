import { useState } from "react";

const Card = (props) => {
  
  const { name, img} = props

  return ( 
    <img className="Card" src={img} alt={name} />
  );
}

export default Card;