import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {remove} from '../store/sclice'
export default function Cart() {
  const products=useSelector((state)=>state.cart)
  const dispatch=useDispatch();
  
  const handleRemove=(productId)=>{
    dispatch(remove(productId));
  }
  return (
   
       <div className='productwrapper grid grid-col  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-20 xl:gap-2  '>
        {
        products.map((product) =>(
            <div className='card w-[280px] xl:w-[18.229vw] p-10 mx-auto mt-10'>
               <img className="ml-14  min-h-[100px] xl:min-h-[5.208vw]" src={product.image}/>
                <h4 className='font-medium min-h-[120px] xl:min-h-[6.250vw] mt-4'>{product.title}</h4>
                <h4 className='font-medium text-[#00FF00] text-center mb-2'>${product.price}</h4>
                <button onClick={()=>handleRemove(product.id)} className='text-[#fff] bg-[#A020F0] rounded p-2 text-center'>Remove</button>

            </div>
        ))
       }
    </div>
    
  )
}
