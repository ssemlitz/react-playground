// import {React, useState, useEffect} from 'react'

const Machine = ({ s1, s2, s3 }) => {
  
  const winner = (s1 === s2) && (s2 === s3);
  
  return (
    <div className='Machine'>
      <p style={{fontSize: '50px', backgroundColor: 'purple'}}>{s1} {s2} {s3}</p>
      <p className={winner?'Machine-win':'Machine-lose'}>{winner ? 'Winner!' : 'Loser!'}</p>
    </div>
  )  
}

export default Machine;