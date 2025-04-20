import React, {useState} from "react";

function Item({ name, category }) {
  //cart variable to hold value of className
  // value false says the className is empty "" meaning item is not added to cart yet
  const [cart, setCart]=useState(false)

  // if className is is true, classname value is "in-cart"
  const cartFunction = cart ? "in-cart" : ""
  
  // function to change the value of className  to true or false based on the current value
  //which at first is false, but when button is clicked, it changes to true 
  function handleClick(){
    setCart(() => !cart)
  }

  return (
    <li className={cartFunction}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick} >{cart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
