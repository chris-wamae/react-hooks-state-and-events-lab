import React,{useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 

  const [pageDefault,setTheme] = useState(false)
  const appClass = pageDefault ? "App dark" : "App light"
  const themeText = pageDefault ? "Light Mode" : "Dark Mode"
  function pageTheme(){
    return setTheme(!pageDefault)
  }

     return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={pageTheme}>{themeText}</button>
      {/* Creating Dark Mode
      1.Button is clicked
      -onClick event is triggered
      -event trigger Changes state from false to true
      and the button text content to Light Mode
      2.changes appClass state to true(its opposite)
      3.Changes button text to Light Mode
      4.The opposite happens when it is clicked again */}

      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
