import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

export default function AddTodo() {
    let [inp , setInp] = useState('')
let {setUser} = useContext(UserContext)
    function handleClick(){
        let todo = {
            id: Date.now(), 
            text: inp
        }
        setUser(todo)
    }
   
  return (
    <div>
      <h1 className='text-center mt-[30px] text-red-600 font-bold text-2xl'>Add Your TODO</h1>
<div className='flex justify-center mt-[30px]'>
      <input type="text" className='border-2 border-black w-1/2 rounded' placeholder='enter your task' onChange={(e)=>setInp(e.target.value)}/>
      <button className='p-2 bg-red-400 ml-[15px] rounded text-white hover:bg-red-200 hover:text-black'
      onClick={handleClick}
      >Add Todo</button>
</div>
    </div>
  )
}
