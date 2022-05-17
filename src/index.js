import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {

  return (
    <button onClick={props.reset}>Reset</button>
  )
};

const Application = () => {

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <Button reset={reset}/>
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
