import React, { useState } from 'react'
import   './Navbar.css'
import { menuList } from '../../data/menuList'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar() {


    const [colorNav, setcolorNav] = useState(false)
    const [openNav, setopenNav] = useState(false)
  return (
    <div className='Navbar'>


    


        <div className="logo">
            <p><i class="fa-solid fa-utensils"></i></p>
            <p>makarona</p>
        </div>
        <div className="listMenu">

            {
                menuList.map((x,i)=>(
                    <Link className={(colorNav&&"activeMenuLI")} id='ulmenu' to={x.path}><li>{x.display}</li></Link>
                ))
            }
           <Link to='/card'>card</Link>
        </div>
        <div className="iconsNav">
        <p className='shoppingCart'><i class="fa-solid fa-bag-shopping"></i>
        <span>{}</span></p>

        <p><i class="fa-solid fa-user"></i></p>

        </div>
        <div onClick={()=>setopenNav(!openNav)} className={"bars "+(openNav&&"activenav")}>
            <span></span><span></span><span></span>
        </div>
    </div>
  )
}
