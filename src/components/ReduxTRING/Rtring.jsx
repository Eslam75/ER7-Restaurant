import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { descrement, increament } from '../../redux/counter'
import './Rtring.css'
export default function Rtring() {
    let dispatch=useDispatch()
    let {count,nameEs}=useSelector((x)=>x.counterrrrr)

  return (
    <div className='retring'>
              <h1>count is {count} {nameEs}</h1>


      <div className="btns">
      <button onClick={()=>{
            dispatch(increament())
        }}>+</button>

<button onClick={()=>{
            dispatch(descrement())
        }}>-</button>
      </div>
    </div>

    
  )
}
