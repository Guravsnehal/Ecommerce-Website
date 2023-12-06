import React from 'react'
import { useState,useEffect } from 'react'
import {add} from '../store/sclice'
import {useDispatch} from 'react-redux'


export default function Products() {
    const dispatch=useDispatch();
    const[Products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchProducts= async()=>{
            const res= await fetch ('https://fakestoreapi.com/products');
            const data= await res.json();
            console.log(data);
            setProducts(data)
        }
        fetchProducts();
    },[])

    const handleAdd=(product)=>{
        dispatch(add(product));
    }

  return (
    <div className='productwrapper grid grid-col  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-20 xl:gap-2 '>
        {
        Products.map((product) =>(
            <div className='card w-[280px] xl:w-[18.229vw] p-10 mx-auto' key={product.id}>
                <img className="ml-14  min-h-[100px] xl:min-h-[5.208vw]" src={product.image} alt="productsimage"/>
                <h4 className='font-medium min-h-[120px] xl:min-h-[6.250vw] mt-4 text-center'>{product.title}</h4>
                <h4 className='font-medium text-[#00FF00] text-center mb-4'>${product.price}</h4>
                <button onClick={()=>handleAdd(product)} className='text-[#fff] bg-[#A020F0] rounded p-2'>Add To Cart</button>

            </div>
        ))
       }
    </div>
  )
}
