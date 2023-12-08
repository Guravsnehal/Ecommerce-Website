import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

import 'primeicons/primeicons.css';
        
export default function Navbar() {
  const items= useSelector((state)=>state.cart)
  return (
    <div className=' flex justify-between p-4 bg-[#2d76ab]'>
      <span className='logo text-[#fff] font-semibold text-lg'>SHOoingSTop</span>
      <div>
        <Link className="px-10 text-[#fff]" to="/">Home</Link>
        <Link className="" to="/cart">
        <span className='relative '>
        <div className='absolute top-[-10px] right-[-15px] border rounded-full w-5 h-5 bg-[#fff]'>
          <div className='flex justify-center items-center mt-[-2px]'>
          {items.length}
          </div>
        </div>
          <i className='pi pi-shopping-cart text-[#fff]'></i></span>
        </Link>
        
      </div>
    </div>
  )
}
// bg-[#2b7daf]