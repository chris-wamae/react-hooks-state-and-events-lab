import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [defaultState,setValue] = useState(items.map((item) => (
  <Item key={item.id} name={item.name} category={item.category} />
)))
function filterRender(event){
let newItems = items.filter((item) => item.category === event.target.value)
console.log(newItems)
setValue(
  newItems.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))
)
   }
 


  
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterRender}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {defaultState}
      </ul>
    </div>
  );
}

export default ShoppingList;
