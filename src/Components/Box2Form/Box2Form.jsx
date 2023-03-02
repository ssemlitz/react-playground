const Box2Form = () => {
  
  const [formData, setFormData] = useState({
    height: '',
    width: '',
    color: '',
  })

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  return ( 
    <form action="">
      <div>
        <label htmlFor="">Height</label>
        <input 
          type="text"
          name='height'
          value={formData.height}
          onChange={handleChange}
          id='height'
        />
      </div>
    </form>
  );
}

export default Box2Form;