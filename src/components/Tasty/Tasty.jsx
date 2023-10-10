import React, { useState } from 'react'
import './Tasty.css'

import { featTasty } from '../../data/featTasty'
import delvLOC from './download.jpg'
import { test } from '../../data/Testmonial'
export default function Tasty() {

  const [select, setselect] = useState(2)

  return (<>

  <p>.</p>
<div className="testmonial">
  <div className="leftTest">
  <h3>testimonial</h3>
  <h1>what our coustomers are saying</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  <div className="testmonialHuman">
    <p>{test[select].para}</p>
    <div className="imgTest">
      <img src={test[select].img} alt="" />
      <p>{test[select].name}</p>
    </div>
  </div>
  <div className="bullets">
  {test.map((x,slideIndex)=>(
    <div key={slideIndex} onClick={()=>setselect(slideIndex)} className="bullet"></div>
  ))}
  </div>

  </div>
  <div className="rightTest">
    <img src={delvLOC} alt="" />
  </div>
</div>
  </>
  
  )
}
