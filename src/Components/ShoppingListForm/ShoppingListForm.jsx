import { useState } from "react"

const ShoppingListForm = (props) => {

  const { addItem } = props

  const [formData, setFormData] = useState({
    name: '',
    qty: ''
  })

  function handleSubmit(evt){
    evt.preventDefault()
    // update the state for the list of items
    addItem(formData)
  }

  function handleChange(evt){
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return ( 
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input 
          type="text" 
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />  
        <label htmlFor='qty'>Quantity:</label>
        <input 
          type="text" 
          id='qty'
          name='qty'
          value={formData.qty}
          onChange={handleChange}
        />
        <button>Submit</button>  
      </form>
    </>
  );
}

export default ShoppingListForm;