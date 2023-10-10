import React, {  useState } from 'react'
import  './PopularFood.css'
import { popularFoods } from '../../data/PopularFoods'
import { addtoproduct } from '../../redux/Cartslice'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'



export default function PopularFood({card,setcard}) {



function addproduct(product){
  const exist=card.find((x)=>x.id===product.id)
if(exist){
  alert("this prodcut already add ")
}else{
  setcard([...card,{...product,qty:1}])
  
}
}
  
// let dispatcher=useDispatch()
// function handleAddtoproduct(product){
//   dispatcher(addtoproduct(product))
// }







const [colorchange, setcolorchange] = useState("All")



const [menu, setmenu] = useState(popularFoods)
const filter= (type)=>{
  setmenu(popularFoods.filter((x)=>
    x.type===type
        ))
}


  return (
    <div className='PopularFood'>

<div className="listMenuFood">


  
 <button   onClick={()=>{ 
  setmenu(popularFoods)
  setcolorchange("ALL")
  }}   className={`${colorchange==="All"?"activeNavfoodBtn":""}`} >
      <span className='nameOfListFood activeNavfoodBtn' >
      All</span>
      </button>

 <button
 className={`${colorchange==="burger"?"activeNavfoodBtn":""}`}
  onClick={()=>{filter("burger") 
  setcolorchange("burger")}}> 
  <span><i className='fa-solid fa-burger'></i></span> 
  <span className='nameOfListFood ' >Burger</span>
  </button>


  <button
 className={`${colorchange==="xPizza"?"activeNavfoodBtn":""}`}
  
   onClick={()=>setcolorchange("xPizza")}>
 <span  ><i className='fa-solid fa-pizza-slice'></i></span> 

   <span className='nameOfListFood'>Pizza</span>
   </button>




</div>

<div className="categoryFood">


{menu.map((x,i)=>(

<div className="cardFood" key={i}>
<img src={x.img} alt="" />
<p>{x.title}</p>
<div className="priceCart">
  <p className='salary'>${x.price}</p>
  <button onClick={()=>addproduct(x)}>add to cart</button>
</div>
  </div>

))}






</div>

    </div>
  )
}
