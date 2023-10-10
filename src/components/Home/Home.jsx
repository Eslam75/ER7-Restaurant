import React from 'react'
import './Home.css'

import delv from './delv.png'
import { featuresMenu } from '../../data/FeaturesMenu'
import FMenu from '../FeaturesMenu/FeaturesMenu'
import Services from '../Services/Services'
import PopularFood from '../PopularFood/PopularFood'
import Tasty from '../Tasty/Tasty'
import { useSelector } from 'react-redux'
import Rtring from '../ReduxTRING/Rtring'
import { Link } from 'react-router-dom'


export default function Home({card,setcard}) {

  return (
        <> 
  <Link id='showproduct' to='/card'>show product</Link>



    <div className='Home'>




        <div className="containerHome">
            
        <div className="leftSideHome">
<p>Lorem ipsum dolor sit amet.</p>
<h1><span>Hungry?</span>Just Wait</h1>
<h1>food at <span>your door</span></h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi.</p>
       <div className="butnss">
        <button>order now <span><i class="fa-solid fa-angle-right"></i></span></button>

        <button>see all foods</button>

       </div>
       <div className="featuresHome">
        <div className="truck">
        <p><i class="fa-solid fa-truck"></i></p>
<p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="shield">
        <p><i class="fa-solid fa-shield-halved"></i></p>
<p>Lorem ipsum dolor sit.</p>
        </div>
       </div>
        </div>

        <div className="RightSideHome">
            <img src={delv} alt="" />
            </div>
        </div>

    </div>
    <FMenu/>
    <Services/>
    <PopularFood card={card} setcard={setcard}/>
    <Tasty/>

    </>
  )
}
