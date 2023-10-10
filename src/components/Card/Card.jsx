import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
export default function Cardcomponents({card,setcard}) {


 let totalpprice=   card.reduce((price,tota)=>price + tota.price * tota.qty,0)
  


  function incrqty(product) {
  const exsit=card.find((x)=>x.id===product.id)

  setcard(card.map((item)=>{
    return item.id ===product.id?{...exsit,qty:exsit.qty+1}:item
  }))
  }

function removeProduct(product){
const exist =card.find((x)=>{
  return x.id=== product.id
})
if(exist.qty>0){
  setcard(card.filter((x)=>{
    return x.id!==product.id
  }))
}
}
  function desqty(product) {
    const exsit=card.find((x)=>x.id===product.id)
  
    setcard(card.map((item)=>{
      return item.id ===product.id?{...exsit,qty:exsit.qty-1}:item
    }))
    }
  
  return (
    <div>
  <Link id='showproduct' to='/home'>show product</Link>


<div className="containerCard">
<div id='contentCard' className="content">
{card.map((x,i)=>( 
    <div id='ccarrddFoood' className="cardFood" key={i}>
      <div className="imgProduct">
      <img src={x.img} alt="" />
      <p id='salaryCartProduct' className='salary'>$ this is price is:{x.price}</p>
      <h4>sub total :{x.qty>0?x.price * x.qty:0}</h4>

      </div>
      <div className="textProduct">
      <p id='tttitleproduct'>{x.title}</p>
    <div className="priceCart">
    
    <div className="qty">
      <button className='incrqty' onClick={()=>incrqty(x)}>+</button>
      <input type="text" value={x.qty<0?0:x.qty} />
      <button className='desqty' onClick={()=>desqty(x)}>-</button>
    </div>
    <button onClick={()=>removeProduct(x)}><i class="fa-solid fa-x"></i></button>

      </div>
      </div>
  
      </div>
))}
</div>
</div>
<h2 className='total'>$ {totalpprice}</h2>


    </div>
  )
}
