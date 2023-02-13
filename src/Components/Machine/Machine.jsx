const Machine = ({ s1, s2, s3 }) => {
    const winner = (s1 === s2) && (s2 === s3);

    return (
      <div>
        <p>{s1} {s2} {s3}</p>
        <p>{winner ? 'Winner!' : 'Loser!'}</p>
      </div>
    )  
}

export default Machine;