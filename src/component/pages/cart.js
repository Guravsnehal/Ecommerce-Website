import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {remove} from '../store/sclice'
export default function Cart() {
  const products=useSelector((state)=>state.cart)
  const dispatch=useDispatch();

  const[count,setCount]=useState(0);

  const handleRemove=(productId)=>{
    dispatch(remove(productId));
  }
  return (
   
       <div className='productwrapper '>
        <div className='text-4xl'>Shopping Cart</div>
        {
        products.map((product) =>(
            <div className='grid grid-cols-6 mt-5'>
               <img className="ml-5 w-[150px] h-[150px]" src={product.image} alt="productsimage"/>
                <h4 className='font-medium min-h-[120px] xl:min-h-[6.250vw] mt-4'>{product.title}</h4>
                <h4 className='font-medium text-[#00FF00] text-center mb-2'>${product.price}</h4>

               <div className='flex'>
               <div class="input-group-prepend">
                  <button class="btn btn-outline-primary " type="button" onClick={() => setCount(count - 1)}>-</button>
                </div>
                {count}
                <div class="input-group-prepend">
                  <button class="btn btn-outline-primary" type="button" onClick={() => setCount(count + 1)}>+</button>
                </div>
                </div>

                <button onClick={()=>handleRemove(product.id)} className='text-[#fff] bg-[#A020F0] rounded p-2 text-center'>Remove</button>

            </div>
        ))
       }
    </div>
    
  )
}
//card w-[280px] xl:w-[18.229vw] p-10 mx-auto mt-10