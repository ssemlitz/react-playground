import Box from "../Box/Box";

const BoxDisplay = () => {
  
  const colors = ['red', 'blue', 'green', 'orange', 'yellow']
  
  
  return ( 
    <div>
      <Box color={colors[2]}/>
    </div>
  );
}

export default BoxDisplay;