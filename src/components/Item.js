import React,{useState} from "react";

function Item({ name, category }) {
const [cartChange,setCartState] = useState(true)
const cartState = cartChange ? "" : "in-cart"
const cartText = cartChange ? "Add to Cart" : "Remove From Cart"
function cartStatus(){
  setCartState(!cartChange)
}
  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartStatus}>{cartText}</button>
    </li>
  );
}

export default Item;
