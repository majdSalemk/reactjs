// import React from 'react'
import { useState } from "react"


export default function State() {
    const [value, setValua] = useState(0)
function update() {
    // setValua(value + 1)
    setValua(x => x + 1)
}
const updateUp = ()  =>  setValua(prev => prev + 1)

const updateDown = ()  =>  setValua(prev => prev - 1)
  
  return (
  <>
    <h1>{value}</h1>
     {/* <button onClick={update}>Click</button>  */}
      <button onClick={ updateUp}>+</button>
      <button onClick={updateDown}>-</button>
  </>
  )
}

