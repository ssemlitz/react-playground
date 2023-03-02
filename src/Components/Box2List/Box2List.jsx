import { useState } from "react";
import Box2 from "../Box2/Box2.jsx";
import Box2Form from "../Box2Form/Box2Form";

const Box2List = () => {

  const [boxes, setBoxes] = useState([])

  function createBox(newBox) {
    setBoxes([...boxes, newBox])
  }

  function deleteBox(id) {
    setBoxes(boxes.filter(box => box.id !== id))
  }

  const allBoxes = boxes.map(box => (
    <Box2
      width={box.width}
      height={box.height}
      color={box.color}
      key={box.id}
      id={box.id}
      deleteBox={() => deleteBox(box.id)}
    />
  ))

  

  

  return ( 
    <>
      <h1>Color Box Maker</h1>
      <Box2Form createBox={createBox} />
      {allBoxes}
    </>
  );
}

export default Box2List;