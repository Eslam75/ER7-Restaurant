import React from 'react'
import { Link } from 'react-router-dom'
import './Notfound.css'

export default function Notfound() {
  return (<>
      <div className='Notfound'><p>please if you do not found the pages click on (start)</p></div>
    <Link id='startLink' to='/home'><li>start</li></Link>
    </>

    )
}
