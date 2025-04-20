import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //note items prop is the data called in App

  //create a varibale to hold value of the options and default value of All
  const [selectedCategory, setSelectedCategory] = useState("All")
  //change value of selectedCategory based on chosen option value
  function handleChange(e){
    setSelectedCategory(e.target.value)
  }
  //filter the items based on value of category
  const filterCategory = items.filter((item)=>{
    if(selectedCategory === "All"){
      return true; //to return all as true...all items are listed
    }else{
      return item.category === selectedCategory;
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* list items based on the liost of filtered items */}
        {filterCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
