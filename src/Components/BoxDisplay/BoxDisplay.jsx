// import { useState } from "react";
import Box from "../Box/Box";
import styles from './BoxDisplay.module.css'

const BoxDisplay = ({numBoxes}) => {
  
  const colors = ['red', 'blue', 'green', 'orange', 'yellow']
  
  const boxes = Array.from({length: numBoxes})
  
  return ( 
    <div className={styles.BoxDisplay}>
      {boxes.map(() => (
        <Box colors={colors}/>
      ))}
    </div>
  );
}

export default BoxDisplay;