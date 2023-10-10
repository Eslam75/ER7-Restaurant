import React from 'react'
import  './FeaturesMenu.css'
import { featuresMenu } from '../../data/FeaturesMenu'

export default function FMenu() {
  return (
    <div className='FeaturesMenu'>

{featuresMenu.map((x,i)=>(
 <div className="FeatureMenu" key={i}>
 <p><i class={x.icon}></i></p>
 <p>{x.para}</p>
</div>
))}

       

    </div>
  )
}
