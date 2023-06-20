import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const isPalindrome = (str) => {
    let firstString = str.toLowerCase().replace(/[^a-zа-я0-9]+/g, "");
    let reverseString = firstString.split("").reverse().join("");
    return firstString === reverseString;
  };

  return (
    <div className="App">
      <input type="text" value={input} onChange={handleChange} />
      <p>{isPalindrome(input) ? "True" : "False"}</p>
    </div>
  );
}

export default App;
