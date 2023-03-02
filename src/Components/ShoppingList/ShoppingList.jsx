import { useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import ShoppingListForm from "../ShoppingListForm/ShoppingListForm";
import {v4 as uuidv4 } from 'uuid'

const ShoppingList = (props) => {

  const [items, setItems] = useState([
    {name: 'banana', qty: 2, id: uuidv4()},
    {name: 'eggs', qty: 1, id: uuidv4()}
  ])

  const addItem = (item) => {
    let newItem = {...item, id: uuidv4()}
    setItems([...items, newItem])
  }

  return ( 
    <>
      <div>
        <ShoppingListForm addItem={addItem} />
      </div>
      <ul>
        {items.map(item => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;