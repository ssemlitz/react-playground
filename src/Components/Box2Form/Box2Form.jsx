import { useState } from "react";
import {v4 as uuidv4 } from 'uuid'

const Box2Form = (props) => {
  
  const {createBox} = props

  const [formData, setFormData] = useState({
    height: '',
    width: '',
    color: '',
  })

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    const newBox = {...formData, id: uuidv4()}
    createBox(newBox)
    setFormData({
      height: '',
      width: '',
      color: '',
    })
  }

  return ( 
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="height">Height</label>
        <input 
          type="text"
          name='height'
          value={formData.height}
          onChange={handleChange}
          id='height'
        />
        <label htmlFor="width">Width</label>
        <input 
          type="text"
          name='width'
          value={formData.width}
          onChange={handleChange}
          id='width'
        />
        <label htmlFor="color">Color</label>
        <input 
          type="text"
          name='color'
          value={formData.color}
          onChange={handleChange}
          id='color'
        />
      </div>
      <button>Add New Box</button>
    </form>
  );
}

export default Box2Form;