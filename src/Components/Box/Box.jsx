import styles from './Box.module.css'
import { useState } from 'react'
import { choice } from '../../helpers'

const Box = ({colors}) => {
  
  let randomColor = choice(colors)

  const [color, setColor] = useState(randomColor)

  
  function chooseColor() {
    let newColor = choice(colors)
    while (newColor === color) {
      newColor = choice(colors)
    }
    setColor(newColor)
  }

  const handleClick = (e) => {
    chooseColor()
  }
  
  return ( 
    <div onClick={handleClick} className={styles.Box} style={{backgroundColor: color}}>
    </div>
  );
}

export default Box;