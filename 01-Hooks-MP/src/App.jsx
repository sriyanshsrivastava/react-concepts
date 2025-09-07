import { useState } from 'react'
import './App.css'

function App() {

  // const counter = 15;
  let [counter,setCounter]=useState(0)

  const addValue=()=>{
    setCounter(counter>=20?counter:counter+1); // preventig counter not to go above 20, using ternery statement

  }

  const removeValue=()=>{
    if (counter>0){ // preventig counter not to be negative, using if-else statement
      setCounter(counter-1);
    }
    
  }

  return (
    <>
      <h1>Simple Counter using hooks concept</h1>
      <h2>COUNTER VALUE: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>The current value of counter is {counter}</p>
    </>
  )
}

export default App
