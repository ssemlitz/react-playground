import { useState } from "react";

const BrokenClick = () => {
  const [clicked, setClicked] = useState(false)
  
  function handleClick(e) {
    clicked ? setClicked(false) : setClicked(true)
  }

  return ( 
    <div>
      <h1>{clicked? 'Clicked' : 'Not clicked'}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default BrokenClick;