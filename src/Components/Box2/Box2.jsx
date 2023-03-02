const Box2 = (props) => {

  const { height, width, color, deleteBox } = props

  return ( 
    <>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: color
        }}>
      </div>
      <button onClick={deleteBox}>X</button>
    </>
  );
}

export default Box2;