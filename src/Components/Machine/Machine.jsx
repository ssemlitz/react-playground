// import {React, useState, useEffect} from 'react'
import styles from './Machine.module.css'


const Machine = ({ s1, s2, s3 }) => {
  
  const winner = (s1 === s2) && (s2 === s3);
  
  return (
    <div className={styles.Machine}>
      <p>{s1} {s2} {s3}</p>
      <p className={winner?'Machine-win':'Machine-lose'}>{winner ? 'Winner!' : 'Loser!'}</p>
    </div>
  )  
}

export default Machine;