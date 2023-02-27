import { useState } from "react";

const Form = (props) => {
  
  const [username, setUserName] = useState('')

  function handleChange(evt) {
    setUserName({username: evt.target.value})
  }

  return ( 
    <div>
      <h1>Form Demo</h1>
      <form action="">
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
}

export default Form;