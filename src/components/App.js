import React , { useState }from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

 // state variable called isDarkMode
 const[darkMode, setDarkMode] = useState(false)

  // function to toggle the dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // className for the app based on dark mode
  
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
    
  );
}

export default App;
