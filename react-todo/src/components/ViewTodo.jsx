import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { useState } from 'react'
import { useEffect } from 'react'

export default function ViewTodo() {
    let [item,  setItem] = useState([])
    let {user} = useContext(UserContext)
    
    function getItem(){
        if(user && !item.includes(user)){
            setItem([...item, user])
        }
    }
    useEffect(()=>{
        getItem()
    }, [user])

  return (
    <div className='mt-[50px] flex flex-col items-center justify-center'>
      {item.map((data)=>(
        <div className='h-[80px] w-3/4 bg-gray-400 rounded flex justify-between items-center p-2 text-2xl mt-[10px]'>
        <p>{data.text}</p>
        <button>❌</button>
      </div>
      ))}
    </div>
  )
}
