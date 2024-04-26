import React, { useEffect, useState } from 'react'

export default function App() {
let [inp , setInp] = useState('')

useEffect(()=>{
  print()
}, [inp])

  function print(){
    console.log("hello")
  }


  return (
    <div>
      <input type="text"  onChange={(e)=> setInp(e.target.value)}/>
      <h1>Value:- {inp}</h1>
    </div>
  )
}
