import { useState } from 'react'
import './App.css'

function App() {

  // const counter = 15;
  let [counter,setCounter]=useState(15)

  const addValue=()=>{
    setCounter(counter+1);

  }

  const removeValue=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Simple Counter using hooks concept</h1>
      <h2>COUNTER VALUE: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
