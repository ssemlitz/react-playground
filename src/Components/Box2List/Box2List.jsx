import { useState } from "react";
import Box2 from "../Box2/Box2.jsx";
import {v4 as uuidv4 } from 'uuid'
import Box2Form from "../Box2Form/Box2Form";

const Box2List = () => {

  const [boxes, setBoxes] = useState([
    {width: 10, height: 40, color: 'orange', id: uuidv4()}
  ])

  const allBoxes = boxes.map(box => (
    <Box2
      width={box.width}
      height={box.height}
      color={box.color}
      key={box.id}
    />
  ))

    function createBox(newBox) {
      setBoxes([...boxes, newBox])
    }

  return ( 
    <>
      <h1>Color Box Maker</h1>
      <Box2Form createBox={createBox}/>
      {allBoxes}
    </>
  );
}

export default Box2List;