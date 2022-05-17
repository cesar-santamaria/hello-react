import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {

  return (
    <button onClick={props.reset}>Reset</button>
  )
};

const Application = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const userInput = event.target.value;
    setName(userInput);
  };

  const reset = () => {
    setName("");
  };

  return (
    <main>
      <input onChange={handleChange} placeholder="Type your name" value={(name)}/>
      <Button reset={reset}/>
      <h1>{(name === "" ? "Please enter your name" : `Hello ${name}`)}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
