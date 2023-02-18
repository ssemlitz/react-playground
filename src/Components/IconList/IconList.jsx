import { useState } from "react";

const IconList = () => {
  
  const [icons, setIcons] = useState(['bone', 'cloud'])

  const options = [
    'angry',
    'anchor',
    'archive',
    'at',
    'archway',
    'baby',
    'bell',
    'bolt',
    'bone',
    'car',
    'city',
    'cloud',
    'couch'
  ]



  const addIcon = (e) => {
    let idx = Math.floor(Math.random() * options.length)
    let newIcon = options[idx]
    setIcons([...icons, newIcon])
  }

  const iconsList = icons.map(i => <i className={`fas fa-${i}`} />)

  return ( 
    <div>
      <h1>Icons: {iconsList}</h1>
      <button onClick={addIcon}>Add New Icon</button>
    </div>
  );
}

export default IconList;