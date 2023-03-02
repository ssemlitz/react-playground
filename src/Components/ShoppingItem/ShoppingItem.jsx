const ShoppingItem = (props) => {

  const { item } = props

  return ( 
    <>
      <div>{item.name}: {item.qty}</div>
    </>
  );
}

export default ShoppingItem;