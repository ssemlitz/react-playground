import { useState } from "react";

const Form = (props) => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    alert(`You typed: ${formData.name} ${formData.email} ${formData.password}`)
    setFormData({
      name: '',
      email: '',
      password: '',
    })
  }

  return ( 
    <div>
      <h1>Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"  
          onChange={handleChange}
          value={formData.name}
          name='name'
        />
        <input 
          type='email' 
          placeholder="email"
          onChange={handleChange}
          value={formData.email}
          name='email'
        />
        <input 
          type='password' 
          placeholder="password"
          onChange={handleChange}
          value={formData.password}
          name='password'
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;